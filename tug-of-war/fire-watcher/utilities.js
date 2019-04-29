/* ====================================================================== HTML ====================================================================== */

function strTooltip(i) {
    return ' data-toggle="tooltip" data-placement="bottom" title="' + (actions[i].extension ? "Shelter extension - " : "") + actions[i].show.tooltip + '"';
}

function strButton(i, j, k, t) {
    k = set(k, i);
    return '<button id=' + i + ' type="button" class="btn btn-default' + (gD.options.darkTheme ? "2" : "") + (k && t != 1 ? strTooltip(k) : "") + ' data-container="body">' + j + '</button>';
}

function strDiv(i, j) {
    return '<div id="' + i + 'Div" class="row" style="margin-left:' + j + 'px">';
}

function setUseLinks(i) {
    var act = ["use", "craft"]; // Each inventory item has potential methods
    for (var t in act) {
        if (game.inventory[i][act[t]]) { // If the item has the action
            for (var k = 0; k < $("#inv_" + i + "_" + act[t]).children().length; k++) { // Iterate over the divs
                var j = $("#inv_" + i + "_" + act[t]).children()[k].children[0].id; // Get the link
                $("#" + j).show().click(function(_i, _j, _t) { // On click
                    return function() {
                        var tmp = utilities[act[_t]](_i, _j.split("_")[2]); // Call pre-computing requirements
                        if (tmp) {
                            game.inventory[_i][act[_t]](tmp); // On success, do action
                        }
                        return false;
                    };
                }(i, j, t)); // Closure
            }
        }
    }
}

function unsetUseLinks(i) {
    for (var k = 0; k < $("#inv_" + i + "_use").children().length; k++) {
        var j = $("#inv_" + i + "_use").children()[k].children[0].id;
        $("#" + j).show().off("click");
    }
}

function validateBounds(callback, ptr) {
    return function() {
        if (Number($("#" + ptr.id).val()) < ptr.min) {
            $("#" + ptr.id).val(ptr.min);
        } else if (Number($("#" + ptr.id).val()) > ptr.max) {
            $("#" + ptr.id).val(ptr.max);
        }
        callback();
    };
}

/* ====================================================================== GENERAL USE ====================================================================== */

// Created by ncerminara - https://gist.github.com/ncerminara/11257943
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}};

function sumPrices(base, factor, owned, number, resource, isMax, more) { // If isMax, simulate using all of resource
    var sum = 0;
    for (var i = owned + 1; (isMax ? resource >= sum + Math.floor(base * Math.pow(factor, i - 1)): i <= owned + number); i++) {
        sum += Math.floor(base * Math.pow(factor, i - 1));
    }
    return (more ? i - owned - 1 : sum);
}

function invProbaPerSec(n) {
        return 1-Math.exp(Math.log(1-n)*game.realTime/1000);
}

function set(x, val) {
    return (typeof x === 'undefined' ? val : x);
}

function setFormatting() {
    var str = this.id.split(/(?=[A-Z])/)[0];
    gD.options.formatting[str] = $("#" + this.id + " option:selected").prevAll().size();
    reload();
    log(str.textify() + " setting changed!");
}

function validateNumber(callback) {
    return function(e) {
        if ($.inArray(e.keyCode, [43, 8, 9, 27, 13, 110, 190, 35, 36, 37, 38, 39, 40, 46]) !== -1 || e.ctrlKey === true && $.inArray(e.keyCode, [65, 67, 68]) !== -1) { // Ctrl A, C, X. 37-40 = arrow keys
            setTimeout(validateBounds(callback, this), 100); // Necessary, otherwise the value doesn't update (autoSaveTimer)
            return;
        }
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105) || Number($("#" + this.id).val()) > this.max) {
            e.preventDefault();
        }
    setTimeout(validateBounds(callback, this), 100);
    };
}

function intRandom(min, max) {
    return 1 + Math.round(Math.random()*(max-min));
}

function count(str, ext) {
    var total = 0;
    for (var i in actions) {
        if (actions[i].show.type == (str || actions[i][str]) && (!ext || actions[i].extension) && !actions[i].noStats) { //TODO : Change eventually, or global variable
            total++;
        }
    }
    return total;
}

function gainTime(n) {
    gD.time += n;
    gD.stats.timeGained += n;
    if (n && (gD.currentTab == "inv" || gD.currentTab == "play")) {
        animate(n, gD.currentTab == "inv");
    }
}

function scramble(str) {
    var out = '', src = str.split(''), n;
    while (src.length > 1) {
        n = Math.floor(Math.random() * src.length);
        out += src[n];
        src.splice(n, 1);
    }
    out += src[0];
    return out;
}

function runeEncode(ins) {
    var out = '';
    for (i = 0; i < ins.length; i++) {
        out += game.codeDest[game.codeSource.indexOf(ins[i])];
    }
    return out;
}

function runeDecode(ins) {
    var out = '';
    for (i = 0; i < ins.length; i++) {
        out += game.codeSource[game.codeDest.indexOf(ins[i])];
    }
    return out;
}

/* ====================================================================== FORMATTING ====================================================================== */

function numberLines(id) {
    return Math.round($(id).height()/parseInt($(id).css('line-height').replace("px","")));
}


function cost(data, hideParen) {
    return (data ? (hideParen ? '' : '(') + timify(data.time, true, 1, 2, 0) + (data.inventory ? (data.inventory.branches ? ", " + data.inventory.branches.value + " branches" : "") + (data.inventory.planks ? ", " + data.inventory.planks.value + " planks" : "") : "") + (hideParen ? '' : ')') : ""); // TODO : Uuuurgh
}

function floorx(data, digits) {
    return Math.floor(Math.pow(10, digits)*data)/Math.pow(10, digits);
}

String.prototype.textify = function() { // camelCaseObject,AnotherAnd_Escaping_or_Not__ -> Camel case object, another and Escapingor Not_
    var res = "";
    var up = false;
    if (this == "") {
        return "";
    }
    var curWord = this[0].toUpperCase();
    for (var i = 1; i < this.length; i++) {
        if(this[i] == '_') {
            res += curWord;
            curWord = (up ? "_" : "");
            up = !up;
        }
        else if(this.charCodeAt(i) >= 65 && this.charCodeAt(i) <= 90) {
            res += curWord + " ";
            curWord = (up ? this[i].toUpperCase() : this[i].toLowerCase());
            up = false;
        }
        else {
            curWord += this[i];
            up = false;
        }
    }
    return res + curWord;
}

function setStats(str, data) {
    for (var i in data) {
        if (typeof data[i] === "object") {
            setStats(str + "_" + i, data[i]);
        } else {
            $(str + "_" + i).html((~i.toLowerCase().indexOf("time") ? timify(data[i], true, 1, 3, 0) : (~i.toLowerCase().indexOf("total") ? data[i] : timify(data[i], false, 1, 1, 3)) ));   
        }
    }
}

function prettify(input, digits, before) {
    var out = input.toFixed((typeof digits === 'undefined' ? 9 : digits));
    var str = "";
    before = (typeof before === 'undefined' ? 0 : before);
    for (var i = 1; i < before; i++) {
        if(input < Math.pow(10, i)) {
            str += "0";
        }
    }
    return str + out;
}

function timify(out, timeLike, shortness, precision, digits, space, extraZeros, keepZeros, extraSpace, choice, fullPrecision) { // TODO : horloge (YYYY:DD:HH:MM:SS.mmm) -> reuse in log etc
    fullPrecision = set(fullPrecision, true);
    timeLike = set(timeLike, true);
    choice = set(choice, gD.options.formatting[(timeLike ? "time" : "resources")] + (timeLike ? 0 : 1));
    precision = set(precision, 3);
    extraSpace = set(extraSpace, true);
    extraZeros = set(extraZeros, false); // choice == 0 && !shortness
    digits = set(digits, 3);
    shortness = set(shortness, 0);
    space = set(space, shortness <= 1);
    keepZeros = set(keepZeros, false);
    var timeUnits = [["second", "sec", "s", 60], ["minute", "min", "m", 60], ["hour", "hr", "h", 24], ["day", "day", "d", 31], ["month", "month", "M", 12], ["year", "yr", "y", 1e3], ["millennium", "mil", "E", 1e3], ["thousands of millennia", "kmil", "kE", 1e3], ["millions of millennia", "Mmil", "ME"]];
    var SIUnits = [/*["yocto", "y"], ["zocto", "z"], ["atto", "a"], ["femto", "f"], ["pico", "p"], ["nano", "n"], ["micro", "µ"], ["milli", "m"], */["", ""], ["kilo", "k"], ["mega", "M"], ["giga", "G"], ["tera", "T"], ["peta", "P"], ["exa", "E"], ["zetta", "Z"], ["yotta", "Y"]];
    var mathUnits = [["", ""],  ["thousand", "K"],  ["million", "M"],  ["billion", "B"],  ["trillion", "T"],  ["quadrillion", "Qa", "Q"],  ["quintillion", "Qi"],  ["sextillion", "Sx", "S"],  ["septillion", "Sp"],  ["octillion", "Oc", "O"],  ["nonillion", "No", "N"],  ["decillion", "Dc", "D"]];
    var alphaUnits = /*"zyxwvutsrqponmlkjihgfedcba*/" ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var outsave = 1; // save out after each loop
    var data, sec; // units, unit for last iteration (s/sec/second)
    var outsave2 = out; // save
    var start = 1; // Starting multiplier
    var pos = []; // successive string lengths
    var subs = []; // unit without and with precision
    var p = 0; // effective steps
    switch (shortness) {
        case 0:
            sec = "seconds";
            break;
        case 1:
            sec = "sec";
            break;
        default:
            sec = "s";
            break;
    }
    switch (choice) {
        case 0:
            data = timeUnits;
            break;
        case 1:
            data = SIUnits;
            //start = 1e24;
            break;
        case 2:
            data = mathUnits;
            break;
        case 3:
            data = alphaUnits;
            //start = 1e78;
            break;
        case 4:
            return floorx(out, digits).toExponential() + (timeLike ? " " + sec : "");
            break;
    }
    if (0 <= out && out < 1) {
        return out + (timeLike ? " " + (sec == "seconds" ? "second" : sec) : "");
    } else if (out < 0) {
        out *= -1;
    }
    
    out = out.toFixed(digits);
    sec = (timeLike && choice ? (choice >= 1 && space || choice == 3 ? " " : "") + sec : "")
    var str = "";
    var n = data.length - 1;
    out *= start;
    for (var i = 0; i <= n && outsave >= 1; i++) {
        var N = data[i].length - 1;
        var div = data[i][data[i].length - 1];
        var str2 = "";
        if (i == data.length - 1) {
            div = Infinity;
        } else if (choice) {
            div = 1e3;
        }
        var cur = (i ? Math.floor(out % div) : out % div);
        var cur2 = (out % div).toFixed(digits);
        if (extraZeros && i != n && out >= div && i) {
            for (var j = 4; j >= 1; j--) {
                var k = Math.pow(10, j);
                str2 += (cur < k && k < div ? "0" : "");
            }
        }
        var add = ((cur && cur > 1e-3 || choice || keepZeros) != 0 ? str2 + cur + (choice || i != 6 || cur < 2 || shortness ? (space ? " " : "") + (choice == 3 ? data[i] : data[i][Math.min(shortness, N - (typeof data[i][N] === 'string' ? 0 : 1))]) + (choice || cur <= 1 || shortness || cur < 2 && i == n ? "" : "s") : (space ? " " : "") + "millennia") + (i && extraSpace ? " " : "") : ""); // The '!= 0' is mandatory, for some reason
        var add2 = add.replace(cur, cur2);
        str = add + str;
        if (cur || fullPrecision) {
            subs.push([add.replace(/ $/, ""), add2.replace(/ $/, "")]);
            pos.push(str.length);
            p++;
        }
        out /= div;
        outsave = out;
    }
    precision = Math.min(precision, p);
    if (precision < p) {
        str = str.slice(0, - pos[p - precision - 1] - (extraSpace ? 1 : 0));
    }
    str += sec;
    if (outsave2 % 1 !== 0 || ~str.search(/[a-zA-Zµ]/)) {
        str = str.replace(subs[p - precision][0], subs[subs.length - precision][1]);
    }
    return (outsave2 < 0 ? "-" : "") + str.replace("  ", " ").replace(/ $/, "");
}

/* ====================================================================== DISPLAY ====================================================================== */

function scroll() {
    var height = $('#navbar').height();
    if ($(this).scrollTop() + height + 10 > $("#actions").position().top) {
        $('#upgrades').css({
            "position": "fixed",
            "top": height + 10,
            "right": 0});
    } else {
        $('#upgrades').css({
            "position": "relative",
            "top": "auto",
            "right": "auto"});
    }
}

function tooltip(id, title, show) {
    show = (typeof show === 'undefined' ? true : show);
    $("#" + id).attr("title", title).tooltip('fixTitle');
    if (show) {
        $("#" + id).tooltip('show');
    }
}

function animate(num) {
    var id = "#time";
    var element = $("<div class='animate'/>");
    element.addClass("text-" + (num < 0 ? "danger" : "success") + (gD.options.darkTheme ? "2" : "")).html((num >= 0 ? "+" : "") + timify(num, true, 0, 2, 3));
    $('body').append(element);
    element.css('position', 'absolute').offset({
        left: $(id).offset().left,
        top: $(id).offset().top
    }).animate({
        top: ($(id).offset().top + 30) + 'px'
    }).animate({
        opacity: 0,
        top: ($(id).offset().top + 30) + 'px'
    }, 500, 'swing', function () {
        $(this).remove();
    });
}

function centerModal() {
    $(this).show();
    var $dialog = $(this).find(".modal-dialog").css("margin-top", offset);;
    var offset = ($(window).height() - $dialog.height()) / 2;
    $dialog.css("margin-top", offset);
}

function toBlur() { // Lose focus
    $(this).blur();
}

function setGreyout(upgrade, unit)  {
    unit = set(unit, "");
    var greyOut = "greyedOut" + (gD.options.darkTheme ? "2" : "");
    if (!$("#" + upgrade + unit + ":hover").length) {
        if (gD.actions[upgrade].unlocked && !compare((unit ? actions[upgrade].getCost(unit) : actions[upgrade].cost), gD) && !gD.actions[upgrade].bought) { // Each action unlocked : grey if and only if not affordable and not bought yet
            if (!$("#" + upgrade + unit).hasClass(greyOut)) {
                $("#" + upgrade + unit).addClass(greyOut);
            }
        } else {
            $("#" + upgrade + unit).removeClass(greyOut);
        }
    } else {
        $("#" + upgrade + unit).removeClass(greyOut);
    }
}

function themeTooltip() {
    changeTooltipColorTo((gD.options.darkTheme ? "#FFF" : "#000"), (gD.options.darkTheme ? "#000" : "#FFF"));
}

function changeTooltipColorTo(color, fgcolor) {
    $(".tooltip-inner").css("background-color", color).css("color", fgcolor);
    $(".tooltip.top .tooltip-arrow").css("border-top-color", color);
    $(".tooltip.right .tooltip-arrow").css("border-right-color", color);
    $(".tooltip.left .tooltip-arrow").css("border-left-color", color);
    $(".tooltip.bottom .tooltip-arrow").css("border-bottom-color", color);
}

