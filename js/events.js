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
 * held                 boolean (false)
 * trigger              function (Object this)
 * groupTrigger         boolean (false), on Enter (other Object). Only 1/tree node
 * text
 * TEXT ================
 * thickness
 * text
 * font
 * sier                 overrides font
 * wrap                 boolean (false)
 * TEXTINPUT ===========
 * barPos               relative, in px
 * nBarPos              relative, before char
 * text
 * editable             boolean (true)
 */

"use strict;"

function eventHandler(e, type) {
    var O, o, k, f = objects[focus];
    oldFocus = focus;
    if (typeof f !== "undefined") {
        if (type == 2) { // Click
            candidates = [];
            for (var i = layers - 1; i >= 0; i--) {
                searchFocus(e, objectsTree[i], candidates);
            }
            if (candidates.length == 1) {
                focus = candidates[0].name;
            } else {
                // TODO : search max z-index
            }
            f = objects[focus];
            if (f.type == "button") {
                f.held = true;
            }
        }
        if (type == 3) {
            if (f.type == "button") {
                f.held = false;
                focus = "root" + f.layer;
                if (insideRect(e, f.loc.x, f.loc.y, f.loc.w, f.loc.h)) {
                    f.trigger(f);
                }
            }
        }
        if (type >= 4 && type <= 6) { // Move
            for (var j = 0; j < layers; j++) {
                for (var i in objectsTree[j].children) {
                    O = objectsTree[j].children[i];
                    if (O.overColor && O.name != focus) {
                        applyRecursive(O, "currentColor", insideRect(e, O.loc.x, O.loc.y, O.loc.w, O.loc.h) ? O.color.over : O.color.standard);
                    }
                }
            }
            if (f.type == "button" && f.clickColor) {
                applyRecursive(f, "currentColor", insideRect(e, f.loc.x, f.loc.y, f.loc.w, f.loc.h) ? f.color.focus : f.color.standard);
            }
        }
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
                if (mapKeys[9]) {
                    if (k == 9) {
                        do {
                            focus = f.next.name;
                            f = objects[focus];
                        } while (f.noFocus);
                    }
                    e.preventDefault();
                } else if (keys[0] == 16 && keys[1] == 9) {
                    do {
                        focus = f.previous.name;
                        f = objects[focus];
                    } while (f.noFocus);
                    e.preventDefault();
                } else if (keys[0] == 13) {
                    if (f.type == "button") {
                        f.trigger(f);
                    } else {
                        c = f.parent.children;
                        for (var i in c) {
                            if (c[i].groupTrigger) {
                                c[i].trigger(c[i]);
                                break;
                            }
                        }
                    }
                } else if (f.type == "textinput") {
                    if (mapKeys[8] && f.editable) {
                        if (f.nBarPos != 0) {
                            n = f.nBarPos;
                            t = f.text;
                            f.text = t.slice(0, n - 1) + t.slice(n, t.length);
                            f.nBarPos = Math.max(n - 1, 0);
                            setBar(f);
                        }
                    } else if (k >= 35 && k <= 40) {
                        switch (k) {
                            case 35:
                                f.nBarPos = f.text.length;
                                break;
                            case 36:
                                f.nBarPos = 0;
                                break;
                            case 37:
                                f.nBarPos = Math.max(f.nBarPos - 1, 0);
                                break;
                            case 39:
                                f.nBarPos = Math.min(f.nBarPos + 1, f.text.length);
                                break;
                            default:
                                break;
                        }
                        setBar(f);
                    }
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
            } else if (f.type == "textinput" && f.editable) {
                i = e.which;
                t = f.text;
                if (i !== 0 && !e.ctrlKey && !e.metaKey && !e.altKey && i != 127 && i != 13) {
                    f.text = t.substr(0, f.nBarPos) + String.fromCharCode(i) + t.substr(f.nBarPos, t.length);
                    f.nBarPos++;
                    setBar(f);
                } else if (i == 127) {
                    n = f.nBarPos;
                    f.text = t.slice(0, n) + t.slice(n + 1, t.length);
                }
            }
        }
        if (oldFocus != focus) {
            setFocus();
            removeFocus(e);
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
    o.overColor = set(o.overColor, true);
    o.clickColor = set(o.clickColor, true);
    o.color = set(o.color, {});
    if (o.type == "text") {
        o.align = set(o.align, "center");
        o.valign = set(o.valign, "middle");
        o.font = set(o.font, "Arial");
        o.wrap = set(o.wrap, false);
    } else if (o.type == "textinput") {
        o.text = set(o.text, "");
        o.font = set(o.font, "Arial");
        o.editable = set(o.editable, true);
        o.barPos = 0;
        o.nBarPos = 0;
    } else if (o.type == "button") {
        o.groupTrigger = set(o.groupTrigger, false);
        o.trigger = set(o.trigger, function(e){});
        o.texth = set(o.texth, .03);
        o.held = false;
    }
    o.currentColor = findInheritance(o, "color", "standard"); // TODO : Upgrade findInheritance(o, "color.standard"), splice, for loop sur les [], etc.
    if (o.name == focus) {
        o.currentColor = o.color.focus;
    }
    if (o.type == "button" && o.text) {
        addObject(o.layer, {type: "text", name: o.name + "txt", loc: {x: o.loc.x + o.loc.w/2, y: o.loc.y + o.loc.h/2, w: .9 * o.loc.w, h: o.texth}, text: o.text, noFocus: true}, o.name);
    }
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

function searchFocus(e, O, candidates) {
    for (var i in O.children) {
        O = objectsTree[O.layer].children[i];
        if (!O.noFocus && insideRect(e, O.loc.x, O.loc.y, O.loc.w, O.loc.h)) {
            candidates.push(O);
        }
        if (O.children) {
            for (var i in O.children) {
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
    if (o && o.clickColor) {
        applyRecursive(o, "currentColor", o.color.focus);
    }
}

function removeFocus(e) {
    o = objects[oldFocus];
    if (o.overColor) {
        applyRecursive(o, "currentColor", insideRect(e, o.loc.x, o.loc.y, o.loc.w, o.loc.h) ? o.color.over : o.color.standard);
    }
}
