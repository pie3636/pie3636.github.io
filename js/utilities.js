/*
 * Color Madness by pie3636, 2015. Code under license CC BY-SA ─ https://creativecommons.org/licenses/by-sa/3.0/
 * Full legal stuff at https://creativecommons.org/licenses/by-sa/3.0/legalcode
 */

"use strict;"

/*
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
*/

function log(str) {
    var d = new Date;
    var date = "[" + prettify(d.getHours(), 2) + ":" + prettify(d.getMinutes(), 2) + ":" + prettify(d.getSeconds(), 2) + "." + prettify(d.getMilliseconds(), 3) + "] ";
   $("#logger").html(date + str + "\n" + $("#logger").html());
    CM.logCount++;
    if (CM.logCount > CM.logMaxCount) {
        $("#logger").html($("#logger").html().split("\n").splice(0, CM.logMaxCount).join("\n")); // Remove last lines
        CM.logCount = CM.logMaxCount;
    }
}

function prettify(input, before) {
    var str = "";
    for (var i = 1; i < before; i++) {
        if(input < Math.pow(10, i)) {
            str += "0";
        }
    }
    return str + input.toFixed(0);
}

function clearFullLogs() {
    $("#logger").html("");
    CM.logCount = 0;
}

