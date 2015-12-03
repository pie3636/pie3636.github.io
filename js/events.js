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
 */

"use strict;"

function eventHandler(e, type) {
    var O, o, k, f = objects[focus];
    oldFocus = focus;
    if (type == 2) { // Click
        candidates = [];
        searchFocus(e, objectsTree[screen], candidates);
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
            focus = "root" + screen;
            if (insideRect(e, f.loc.x, f.loc.y, f.loc.w, f.loc.h)) {
                f.trigger(f);
            }
        }
    }
    if (type >= 4 && type <= 6) { // Move
        for (i in objectsTree[screen].children) {
            O = objectsTree[screen].children[i];
            if (O.overColor && O.name != focus) {
                applyRecursive(O, "currentColor", insideRect(e, O.loc.x, O.loc.y, O.loc.w, O.loc.h) ? O.color.over : O.color.standard);
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
            if (keys[0] == 9) {
                do {
                    focus = f.next.name;
                    f = objects[focus];
                } while (f.noFocus);
                e.preventDefault();
            } else if (keys[0] == 16 && keys[1] == 9) {
                do {
                    focus = f.previous.name;
                    f = objects[focus];
                } while (f.noFocus);
                e.preventDefault();
            } else if (mapKeys[8]) {
                n = f.nBarPos;
                t = f.text;
                f.text = t.slice(0, n - 1) + t.slice(n, t.length);
                f.nBarPos = Math.max(n - 1, 0);
                f.barPos = Math.min(Math.floor(measuretext(f, .6, f.nBarPos)), .96 * W(f.loc.w));
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
                f.barPos = Math.min(Math.floor(measuretext(f, .6, f.nBarPos)), .96 * W(f.loc.w));
            }
        } else if (type == 8) {
            mapKeys[k] = false;
            newKeys = [];
            for (i in keys) {
                if (keys[i] != k) {
                    newKeys.push(keys[i]);
                }
            }
            keys = newKeys;
        } else if (f.type == "textinput") {
            i = e.which;
            if (i !== 0 && !e.ctrlKey && !e.metaKey && !e.altKey && i != 127 && i != 13) {
                f.text += String.fromCharCode(i);
                f.nBarPos++;
                f.barPos = Math.min(Math.floor(measuretext(f, .6, f.nBarPos)), .96 * W(f.loc.w));
            } else if (i == 127) {
                n = f.nBarPos;
                t = f.text;
                f.text = t.slice(0, n) + t.slice(n + 1, t.length);
            }
        }
    }
    if (oldFocus != focus) {
        setFocus();
        removeFocus(e);
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
    if (o.type == "text") {
        o.align = set(o.align, "center");
        o.valign = set(o.valign, "middle");
        o.font = set(o.font, "Arial");
        o.wrap = set(o.wrap, false);
    } else if (o.type == "textinput") {
        o.text = set(o.text, "");
        o.font = set(o.font, "Arial");
        o.barPos = 0;
        o.nBarPos = 0;
    } else if (o.type == "button") {
        o.held = false;
        o.trigger = set(o.trigger, function(e){});
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
        if (O.wrap) {
            words = O.text.split(' ');
            cline = '';
            y = O.loc.y;
            O.ctx.font = O.size + "pt " + O.font;
            for (n = 0; n < words.length; n++) {
                testLine = cline + words[n] + ' ';
                wi = O.ctx.measureText(testLine).width;
                if ((wi > W(O.loc.w) || ~words[n].indexOf('\n'))) {
                    if (~words[n].indexOf('\n')) {
                        cline += words[n].split('\n')[0];
                        words[n] = words[n].split('\n')[1];
                    }
                    text(O.ctx, O.loc.x, y, O.loc.w, O.size/h, cline, O.font, O.currentColor, "left", "top");
                    cline = words[n] + ' ';
                    y += (1.5 * O.size)/h;
                }
                else {
                    cline = testLine;
                }
            }
            text(O.ctx, O.loc.x, y, O.loc.w, O.size/h, cline, O.font, O.currentColor, "top", "top");
        } else {
            text(O.ctx, O.loc.x, O.loc.y, O.loc.w, O.size ? O.size/h : O.loc.h, O.text, O.font, O.currentColor, O.align, O.valign);
        }
    } else if (O.type == "textinput") {
        button(O.ctx, O.loc.x, O.loc.y, O.loc.w, O.loc.h, O.r, O.currentColor, O.thickness);
        text(O.ctx, O.loc.x + .01 * O.loc.w, O.loc.y + .075 * O.loc.h, .98 * O.loc.w, .6 * O.loc.h, O.text, O.font, O.currentColor, "left", "top");
        if (focus == O.name) {
            line(O.ctx, O.loc.x + .03 * O.loc.w + O.barPos/w, O.loc.y + .15 * O.loc.h, 0, O.loc.h * .7, O.currentColor, O.thickness - 1);
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
