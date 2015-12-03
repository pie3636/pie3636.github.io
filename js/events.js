/*
 * Color Madness by pie3636, 2015. Code under license CC BY-SA ─ https://creativecommons.org/licenses/by-sa/3.0/
 * Full legal stuff at https://creativecommons.org/licenses/by-sa/3.0/legalcode
 */

/* member Fields of class Object :
 * type                 textinput   button      text
 * name
 * ctx
 * loc                  {x, y, w, h}
 * nofocus              boolean (false)
 * color                {over, standard, focus} (parent)
 * currentColor
 * clickColor           boolean (true)
 * overColor            boolean (true)
 * parent               Object
 * children             [Objects]
 * next
 * previous
 * BUTTON ==============
 * r                    radius
 * TEXT ================
 * thickness
 * text
 * font
 */

"use strict;"

function eventHandler(e, type) {
    var O, o, k;
    oldFocus = focus;
    if (type < 4) { // Click
        candidates = [];
        searchFocus(e, objectsTree[screen], candidates);
        if (candidates.length == 1) {
            focus = candidates[0].name;
        } else {
            // TODO : search max z-index
        }
    }
    if (type > 3 && type < 7) { // Move
        for (i in objectsTree[screen].children) {
            O = objectsTree[screen].children[i];
            if (O.overColor && O.name != focus) {
                applyRecursive(O, "currentColor", insideRect(e, O.loc.x, O.loc.y, O.loc.w, O.loc.h) ? O.color.over : O.color.standard);
            }
        }
    }
    if (type > 6) { // Key
        k = e.keyCode;
        if (type == 7) {
            if(!mapKeys[k]){
                keys.push(k);
                mapKeys[k] = true;
            }
            if (keys[0] == 9) {
                do {
                    focus = objects[focus].next.name;
                } while (objects[focus].noFocus);
                e.preventDefault();
            }
            if (keys[0] == 16 && keys[1] == 9) {
                do {
                    focus = objects[focus].previous.name;
                } while (objects[focus].noFocus);
                e.preventDefault();
            }
        }
        if (type == 8) {
            mapKeys[k] = false;
            newKeys = [];
            for (i in keys) {
                if (keys[i] != k) {
                    newKeys.push(keys[i]);
                }
            }
            keys = newKeys;
        }
    }
    if (oldFocus != focus) {
        setFocus();
        removeFocus(e);
    }
}
/*
$(document).keydown(function(e) {
    if(!map[e.keyCode]){
        down.push(e.keyCode);
        if(down[0] === 68 && down[1] === 69 && down[2] === 86) {
            console.log('D + E + V was pressed');
        } 
    }
    map[e.keyCode] = true;
}).keyup(function(e) {
    map[e.keyCode] = false;
    down.length = 0;
});
*/

function addObject(c, o, parent) {
    objects[o.name] = o;
    o.children = [];
    if (typeof parent === 'undefined') {
        objectsTree[screen].children.push(o);
        o.parent = objectsTree[screen];
    } else {
        objects[parent].children.push(o);
        o.parent = objects[parent];
    }
    ch = o.parent.children;
    o.next = o;
    o.previous = o;
    if (ch.length > 1) {
        o.previous = ch[o.parent.children.length - 2];
        o.previous.next = o;
        o.next = ch[0];
        ch[0].previous = o;
    }
    o.children = [];
    o.ctx = ctx[c];
    if (o.type == "button" || o.type == "text" && o.parent.type == "button" || o.type == "textinput") {
        o.overColor = set(o.overColor, true);
        o.clickColor = set(o.clickColor, true);
    }
    if (o.type == "text") {
        o.align = set(o.align, "center");
        o.valign = set(o.valign, "middle");
    }
    o.currentColor = findInheritance(o, "color", "standard"); // TODO : Upgrade findInheritance(o, "color.standard"), splice, for loop sur les [], etc.
    if (o.name == focus) {
        o.currentColor = o.color.focus;
    }
}

function drawAll() {
    recursiveDraw(objectsTree[screen]);
    if (initFocus) {
        setFocus();
        initFocus = false;
    }
}

function recursiveDraw(O) {
    if (O.type == "button") {
        button(O.ctx, O.loc.x, O.loc.y, O.loc.w, O.loc.h, O.r, O.currentColor, O.thickness);
    } else if (O.type == "text") {
        text(O.ctx, O.loc.x, O.loc.y, O.loc.w, O.loc.h, O.text, O.font, O.currentColor, O.align, O.valign);
    } else if (O.type == "textinput") {
        button(O.ctx, O.loc.x, O.loc.y, O.loc.w, O.loc.h, O.r, O.currentColor, O.thickness);
        if (focus == O.name) {
            line(O.ctx, O.loc.x + .03 * O.loc.w, O.loc.y + .15 * O.loc.h, 0, O.loc.h * .7, O.currentColor, O.thickness - 1);
        }
    }
    if (O.children) {
        var o;
        for (var i in O.children) {
           recursiveDraw(O.children[i]);
        }
    }
}

function applyRecursive(O, property, value) {
    O[property] = value;
    if (O.children) {
        for (i in O.children) {
            applyRecursive(O.children[i], property, value);
        }
    }
}

function searchFocus(e, O, candidates) {
    for (i in O.children) {
        O = objectsTree[screen].children[i];
        if (!O.noFocus && insideRect(e, O.loc.x, O.loc.y, O.loc.w, O.loc.h)) {
            candidates.push(O);
        }
        if (O.children) {
            for (i in O.children) {
                searchFocus(e, O.children[i], candidates);
            }
        }
    }
}

function findInheritance(o, property, value) {
    if (!o.parent) {
        console.log("No parent contained " + property + "." + value + "!");
    }
    return o[property][value] ? o[property][value] : findInheritance(o.parent, property, value);
}

function setFocus() {
    o = objects[focus];
    if (o.clickColor) {
        applyRecursive(o, "currentColor", o.color.focus);
    }
}

function removeFocus(e) {
    o = objects[oldFocus];
    if (o.overColor) {
        applyRecursive(o, "currentColor", insideRect(e, o.loc.x, o.loc.y, o.loc.w, o.loc.h) ? o.color.over : o.color.standard);
    }
}
