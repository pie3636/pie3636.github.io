/*
 * Color Madness by pie3636, 2015. Code under license CC BY-SA ─ https://creativecommons.org/licenses/by-sa/3.0/
 * Full legal stuff at https://creativecommons.org/licenses/by-sa/3.0/legalcode
 */

"use strict;"

function set(x, val) {
        return (typeof x === 'undefined' ? val : x);
}

function W(i) {
    return Math.floor(i * w);
}

function H(i) {
    return Math.floor(i * h);
}

function checkNext(f) {
    if (stayOnScreen) {
        requestAnimationFrame(f);
        return;
    }
    stayOnScreen = true;
    init = true;
    for (var i = 0; i < layers; i++) {
        clearTree(objects["root" + i]);
        objectsTree[i] = {type: "root", name: "root" + i, children: [], layer: i};
    }
    for (var i in objects) {
        delete objects[i];
    }
    objects = [];
    for (var i = 0; i < layers; i++) {
        objects["root" + i] = objectsTree[i];
    }
    screen = nextScreen;
    requestAnimationFrame(screens[screen]);
        
}

function setBar(f) {
    f.barPos = Math.floor(measuretext(f, .8, f.nBarPos));
    d = Math.floor(measuretext(f, .8, f.text.length));
    z = W(f.loc.w);
    if (d > z - 10) {
        f.barPos *= (z - 10) / d;
    }
}
