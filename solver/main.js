builtin_console_log = console.log;
var MAX_SIZE = 10000, currentVersion = "0.1";
var err2, costfield;
var operators = {
    None: {str: ''},
    DIGIT: {str: ''},
    SQUARE_ROOT: {str: '√'},
    DOUBLE_FACTORIAL: {str: '!!'},
    PRIME_NUMBER: {str: 'P'},
    SIGMA: {str: 'σ'},
    DIVISOR_COUNT: {str: 'd'},
    PARTITION: {str: 'p'},
    GAMMA: {str: 'Γ'},
    HYPERGEOM: {str: 'H'},
    CATALAN: {str: 'C'},
    PLUS: {str: ' + ', priority: 1},
    TIMES: {str: ' * ', priority: 2},
    DIVIDE: {str: ' / ', priority: 2},
    POWER: {str: '^', priority: 3},
};

document.addEventListener("DOMContentLoaded", function(e) {
    err2 = document.getElementById('err2');
    costfield = document.getElementById('cost');
    evalbutton = document.getElementById('evaluate');
    data = document.getElementById('data');
    savefile = document.getElementById('savefile');
    saved = document.getElementById('saved');
    evalbutton.onclick = evaluate;
    document.getElementById('clear').onclick = function(e) {
        err2.value = "";
    }
    document.getElementById('save').onclick = function(e) {
        localStorage.setItem(savefile.value.replace(/\W/g, ""), costfield.value);
        saved.innerHTML = "Saved file.";
        setTimeout(function() {saved.innerHTML = ""}, 5000);
    }
    document.getElementById('load').onclick = function(e) {
        x = localStorage.getItem(savefile.value.replace(/\W/g, ""));
        if (x) {
            costfield.value = x;
            saved.innerHTML = "Loaded file.";
        } else {
            saved.innerHTML = "File doesn't exist.";
        }
        setTimeout(function() {saved.innerHTML = ""}, 5000);
    }
    data.value = data.value.replace("${max}", MAX_SIZE);
    eval(costfield.value);
    eval("countData = " + data.value);
    cost.ABSOLUTE_VALUE /= 2;
    localStorage.setItem("__cost", cost);
    localStorage.setItem("__data", countData);
    console.log = function() {
        builtin_console_log.apply(console, arguments);
        for (i in arguments) {
            err2.value += arguments[i] + " ";
        }
        err2.value += "\n";
    }
});

function evaluate() {
    try {
        eval(costfield.value);
        cost.ABSOLUTE_VALUE /= 2;
        localStorage.setItem("__cost", cost);
        console.log('Successfully parsed.');
    } catch(e) {
        console.log('Error parsing code : ' + e);
    }
}

function solve(str) {
    try {
        eval("countData = " + str);
        localStorage.setItem("__data", str);
        tables = localStorage.getItem("__tables");
        if (tables === null || tables.version != currentVersion) {
            initTables();
        }
        if (countData.count > MAX_SIZE) {
            console.log('Max value exceeded. Aborting.');
            return;
        }
        
        console.log('Finding heuristic.');
        var bound = heuristics(countData);
        bound.cost = evaluateCost(bound.solution);
        console.log('Found [' + display(bound.solution) + '], with a cost of ' + bound.cost);
        
        var result = treeSearch(bound, countData);
        document.getElementById('err').value = display(result.solution) + "\nCost : " + result.cost;
    } catch (e) {
        console.log('Error parsing code : ' + e);
    }
}

function initTables() {
    console.log('Initializing program data for v' + currentVersion + '. This will only be run once, but might take a little while on older machines.');
    tables = {};
    tables.primes = primeSieve(MAX_SIZE);
    tables.primeIndices = primeIndices(MAX_SIZE);
    tables.version = currentVersion;
    //localStorage.setItem("__tables", tables);
    console.log('Done.');
}

function evaluateCost(tree) {
    if (typeof tree.left !== 'undefined') {
        return cost[tree.type] + evaluateCost(tree.left) + evaluateCost(tree.right)
        + ((tree.type === 'DOUBLE_FACTORIAL' || tree.type === 'SQUARE_ROOT') && typeof tree.child.child !== 'undefined' ? cost.PARENTHESIS : 0);
    }
    if (typeof tree.child !== 'undefined') {
        return cost[tree.type] + evaluateCost(tree.child)
        + (tree.type === 'POWER' ? ((typeof tree.left.child === 'undefined') + (typeof tree.right.child === 'undefined')) * cost.PARENTHESIS : 0);
    }
    if (typeof tree.value !== 'undefined') {
        return cost[tree.type];
    }
    return 0;
}

function heuristics(data) {
    bound = { solution: { type: 'None' }, cost: Infinity };
    var n = data.count, factor, factors = [];
    // sorted([2**i * 3**j for i in range(14) for j in range(10) if (2**i) * (3**j) < 10000])
    // 2, 3, 4, 6, 8, 9, 12, 16, 18, 24, 27, 32, 36, 48, 54, 64, 72, 81, 96, 108, 128, 144, 162, 192, 216, 243, 256, 288, 324, 384, 432, 486, 512, 576, 648, 729, 768, 864, 972, 1024, 1152, 1296, 1458, 1536, 1728, 1944, 2048, 2187, 2304, 2592, 2916, 3072, 3456, 3888, 4096, 4374, 4608, 5184
    // Eliminate powers of 2 and 3. Ideally this can be automated later on.
    if (n % 9216 == 0) { bound.solution = __('TIMES', __('PLUS', _4, _5), __('POWER', _4, _5)); return bound; } // (10, 2) Future: 2*48²
    if (n % 8748 == 0) { bound.solution = __('TIMES', _('HYPERGEOM', _3), __('POWER', _3, _4)); return bound; } // (2, 7)
    if (n % 8192 == 0) { bound.solution = __('POWER', _2, __('PLUS', _8, _5)); return bound; }                  // (13, 0)
    if (n % 7776 == 0) { bound.solution = __('POWER', _6, _5); return bound; }                                  // (5, 5)
    if (n % 6912 == 0) { bound.solution = __('DIVIDE', _('HYPERGEOM', _4), _4); return bound; }                 // (8, 3)
    if (n % 6561 == 0) { bound.solution = __('POWER', _3, _8); return bound; }                                  // (0, 8)
    if (n % 6144 == 0) { bound.solution = __('TIMES', _6, __('POWER', _4, _5)); return bound; }                 // (11, 1)
    if (n % 5832 == 0) { bound.solution = __('POWER', __('PLUS', _('CATALAN', _4), _4), _3); return bound; }    // (3, 6)
    if (n % 5184 == 0) { bound.solution = __('DIVIDE', __('POWER', __('TIMES', _4, _3), _4), _4); return bound; }    // (6, 4) 2^6 * 3^4  12^4 / 4
    while (n != 1) {
        factor = naivePrimeFactor(n);
        n /= factor;
        factors.push(factor);
    }
    
    // Replace primes by their indices
    var subTree = bound.solution, child;
    while (factors.length != 0) {
        factor = factors.pop();
        switch (factor) {
            default:
                child = _('PRIME_NUMBER', _1(tables.primeIndices[factor]));
                break;
        }
        if (factors.length == 0) {
            subTree.right = child;
        } else {
            subTree.right = __('TIMES', child, _0);
        }
        subTree = subTree.right;
    }

    bound.solution = bound.solution.right;
    return bound;
}

// Empty tree, digit, unary operator, binary operator
function _0() { return {}; }
function _1(n) { return { type: 'DIGIT', value: n }; }
function _(str, n) { return { type: str, child: n }; }
function __(str, a, b) { return { type: str, left: a, right: b }; }
_2 = _('SQUARE_ROOT', _1(4));
_3 = _('DIVISOR_COUNT', _1(4));
_4 = _1(4);
_5 = _('PARTITION', _1(4));
_6 = _('GAMMA', _1(4));
_7 = _('SIGMA', _1(4));
_8 = _('DOUBLE_FACTORIAL', _1(4));

function treeSearch(bound, data) {
    console.log('Running tree search');
    console.log('[Not implemented yet]'); // TODO
    console.log('Done. Outputting solution.');
    return bound;
}

function isBinary(tree) {
    return typeof tree !== 'undefined' && typeof tree.left !== 'undefined';
}

function isUnary(tree) {
    return typeof tree !== 'undefined' && typeof tree.child !== 'undefined';
}

// Binary is always ambiguous -> op(a op b). Ex. (a + b)!
// Unary is ambiguous if strictly prefix or postfix -> op(op(a)) isn't, but op(op a) or op(a op) is. Ex. H(3)! isn't (H isn't strictly prefix or postfix), but (3!)! is (! is strictly postfix)
function parenDisplay(tree, parent) {
    return isBinary(tree) && operators[tree.type].priority < operators[parent.type].priority
    || isUnary(parent) && (parent.type == 'FACTORIAL' || parent.type == 'DOUBLE_FACTORIAL' || parent.type == 'SQUARE_ROOT')
    ? '(' + display(tree) + ')' : display(tree);
}

function display(tree) {
    switch (tree.type) {
        case 'None':
            return operators[tree.type].str;
        case 'DIGIT':
            return tree.value;
        case 'SQUARE_ROOT':
            return operators[tree.type].str + parenDisplay(tree.child);
        case 'DOUBLE_FACTORIAL':
            return parenDisplay(tree.child) + operators[tree.type].str;
        // Pre and postfix unary
        case 'PRIME_NUMBER':
        case 'SIGMA':
        case 'DIVISOR_COUNT':
        case 'PARTITION':
        case 'GAMMA':
        case 'HYPERGEOM':
        case 'CATALAN':
            return operators[tree.type].str + '(' + display(tree.child) + ')';
        // Infix binary
        case 'PLUS':
        case 'TIMES':
        case 'DIVIDE':
        case 'POWER':
            return parenDisplay(tree.left, tree) + operators[tree.type].str + parenDisplay(tree.right, tree);
        /*
          MINUS: 1,
          KNUTH_ARROW: 4,
          FACTORIAL: 3,
          SUPERFACTORIAL: 5,
          CONCAT: 5,
          SINE: 5,
          COSINE: 5,
          TANGENT: 5,
          SECANT: 5,
          COSECANT: 5,
          COTANGENT: 5,
          ARC_SINE: 5,
          ARC_COSINE: 5,
          ARC_TANGENT: 5,
          ARC_SECANT: 5,
          ARC_COSECANT: 5,
          ARC_COTANGENT: 5,
          EXPONENTIAL: 6,
          LOGARITHM: 6,
          ABSOLUTE_VALUE: 3,
          FLOOR: 6,
          CEIL: 6,
          ACKERMANN: 4,
          BACKWARDS: 6,
          MOBIUS: 5,
          SIGN: 4,
          FIBONACCI: 4,
          BINARYBEANSTALK: 7,
          SIGMA: 4,
          MULTISIGMADIGIT: 5,
          DIVISOR_SUM: 4,
          PRIME_COUNT: 5,
          NONPRIME: 7,
          EULER_TOTIENT: 4,
          TOTIENT_SUM: 6,
          SMALL_OMEGA: 4,
          BIG_OMEGA: 4,
          PRIMORIAL: 4,
          DECIMAL_SEPARATOR: 3,
          REPEATING_DECIMAL: 3,
          PERCENT: 5
        */
        default:
            return '?';
    }
}