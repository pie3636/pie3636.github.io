/*
 * Color Madness by pie3636, 2015. Code under license CC BY-SA ─ https://creativecommons.org/licenses/by-sa/3.0/
 * Full legal stuff at https://creativecommons.org/licenses/by-sa/3.0/legalcode
 */

"use strict;"

function eventHandler(e, type) {
    var O, o, oldFocus = focus;
    if (type <= 3) {
        candidates = [];
        searchFocus(e, objectsTree[screen], candidates);
        if (candidates.length == 1) {
            focus = candidates[0].name;
        } else {
            // TODO : search max z-index
        }
    }
    for (i in objectsTree[screen].children) {
        O = objectsTree[screen].children[i];
        if (type > 3) {
            if (O.param_over && O.name != focus) {
                applyRecursive(O, "currentColor", insideRect(e, O.loc.x, O.loc.y, O.loc.w, O.loc.h) ? O.color.over : O.color.standard);
            }   
        }
    }
    if (oldFocus != focus || initFocus) {
        o = objects[oldFocus];
        applyRecursive(o, "currentColor", insideRect(e, o.loc.x, o.loc.y, o.loc.w, o.loc.h) ? o.color.over : o.color.standard);
        o = objects[focus];
        applyRecursive(o, "currentColor", o.color.focus);
        initFocus = false;
    }
}

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
    o.children = [];
    o.ctx = ctx[c];
    if (o.type == "button" || o.type == "text" && o.parent.type == "button" || o.type == "textinput") {
        o.param_over = true;
        o.currentColor = findInheritance(o, "color", "standard"); // TODO : Upgrade findInheritance(o, "color.standard"), splice, for loop sur les [], etc.
    }
    if (o.name == focus) {
        o.currentColor = o.color.focus;
    }
}

function drawAll() {
    recursiveDraw(objectsTree[screen])
}

function recursiveDraw(O) {
    if (O.type == "button") {
        button(O.ctx, O.loc.x, O.loc.y, O.loc.w, O.loc.h, O.r, O.currentColor, O.thickness);
    } else if (O.type == "text") {
        text(O.ctx, O.loc.x, O.loc.y, O.loc.w, O.loc.h, O.text, O.font, O.currentColor);
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
        if (O.param_over && insideRect(e, O.loc.x, O.loc.y, O.loc.w, O.loc.h)) {
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
