/*
 * Color Madness by pie3636, 2015. Code under license CC BY-SA ─ https://creativecommons.org/licenses/by-sa/3.0/
 * Full legal stuff at https://creativecommons.org/licenses/by-sa/3.0/legalcode
 */

/* member Fields of class Object :
 * type                 text
 * name
 * ctx
 * loc                  {x, y, w, h}
 * color                (parent)
 * parent               Object
 * children             [Objects]
 * TEXT ================
 * thickness
 * text
 * font
 * size                 overrides font
 * wrap                 boolean (false)
 */

"use strict;"

/*
function eventHandler(e, type) {
    var O, o, k;
    if (type > 6) { // Key
        k = e.keyCode;
        if (k == 8) {
            e.preventDefault();
        }
        if (type == 7) {
            if(!mapKeys[k]){
                keys.push(k);
                mapKeys[k] = true;
            }
            if (mapKeys[9] || keys[0] == 16 && keys[1] == 9) {
                e.preventDefault();
            }
        } else if (type == 8) {
            mapKeys[k] = false;
            newKeys = [];
            for (var i in keys) {
                if (keys[i] != k) {
                    newKeys.push(keys[i]);
                }
            }
            keys = newKeys;
        }
    }
}

function addObject(c, o, parent) {
    objects[o.name] = o;
    o.layer = c;
    o.children = [];
    if (typeof parent === 'undefined') {
        objectsTree[o.layer].children.push(o);
        o.parent = objectsTree[o.layer];
    } else {
        objects[parent].children.push(o);
        o.parent = objects[parent];
    }
    ch = o.parent.children;
    o.children = [];
    o.ctx = ctx[c];
    o.color = set(o.color, "");
    if (o.type == "text") {
        o.align = set(o.align, "center");
        o.valign = set(o.valign, "middle");
        o.font = set(o.font, "Arial");
        o.wrap = set(o.wrap, false);
    }
    o.color = findInheritance(o, "color"); // TODO : Upgrade findInheritance(o, "color.standard"), splice, for loop sur les [], etc.
}

function clearTree(O) {
    if (O.children) {
        for (var i in O.children) {
            clearTree(O.children[i]);
            delete O.children[i];
        }
    } else {
        delete O.children[i];
    }
}

function applyRecursive(O, property, value) {
    O[property] = value;
    if (O.children) {
        for (var i in O.children) {
            applyRecursive(O.children[i], property, value);
        }
    }
}

function findInheritance(o, property, value) {
    if (!o.parent) {
        console.log("No parent contained " + property + "." + value + "!");
    }
    return o[property] ? o[property] : findInheritance(o.parent, property);
}
*/
