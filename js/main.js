/*
 * Color Madness by pie3636, 2015. Code under license CC BY-SA ─ https://creativecommons.org/licenses/by-sa/3.0/
 * Full legal stuff at https://creativecommons.org/licenses/by-sa/3.0/legalcode
 */

// Use integer coordinates
// Avoid scaling images
// Layer canvas (z-index)
// Avoid text rendering, shadowBlur
// performance.now();
// Cache properties in loops
// Store DOM elements

"use strict;"

var CM = {
    logCount: 0,
    logMaxCount: 100,
    layers: 1,
    w: undefined,
    h: undefined,
    ws: undefined
};

$(function() {
    $("#play").click(function(e) {
        toggleAll();
        if (!window.WebSocket) {
            $("#canvas0").replaceWith($("#canvas0").html().replace());
        } else {
            ws = new WebSocket("ws://127.0.0.1:9001");
            CM.ws = ws;
            ws.onopen = function() {
                log("Connected to server.");
            }
            ws.onclose = function(e) {
                if (e.wasClean) {
                    log("Connection correctly closed.");
                } else {
                    log("Connection terminated. " + e.reason);
                }
                CM.ws = null;
                log('To return to the menu, issue the server command "Menu".');
            }
            ws.onerror = function(e) {
                log("Socket error. This is normal if the server isn't started.");
            }
            ws.onmessage = function(e) {
                log("Received [" + e.data + "]");
            }
            resize();
            window.onresize = resize;
        }
    })
    $("#send").click(function(e) {
        if (CM.ws) {
            CM.ws.send($("#command").val());
        } else {
            log("Warning! You aren't connected to any server.");
            var cmd = $("#command").val().toLowerCase();
            if (cmd == "menu") {
                log("Returning to menu...");
                toggleAll();
            } else {
                log("Unrecognized command : [" + $("#command").val() + "]. Supported command in offline mode : Menu")
                $("#command").val("");
            }
        }
    });
    $("#command").keyup(function(e) {
        if (e.which == 13) {
            e.preventDefault();
            $("#send").click();
    }
    });
});

function toggleAll() {
    $("#play").toggle();
    $("#canvas0").toggle();
    $("#logger").toggle();
    $("#send").toggle();
    $("#command").toggle();
    $("#command").val("");
}

/*
var frame = 0, _0, screen = 0, nextScreen = 0, focus, oldFocus;
var init = true, initFocus = true, stayOnScreen = true;
var _ = [], ctx = [], objects = {}, objectsTree = [[]], keys = [], mapKeys = [], screens = [_serverConnection, _mainMenu, _game];


window.onload = function() {
    for (var i = 0; i < layers; i++) {
        _[i] = document.getElementById("canvas" + i);
        if (_[i].getContext) {
            _[i].offscreen = document.createElement("canvas");
            _[i].offscreen.width = w;
            _[i].offscreen.height = h;
            ctx[i] = _[i].offscreen.getContext("2d");
            objectsTree[i] = {type: "root", name: "root" + i, children: [], layer: i};
            objects["root" + i] = objectsTree[i];
        }
    }
    _0 = ctx[0];
    window.onkeydown    = function(e) { eventHandler(e, 7); }
    window.onkeyup      = function(e) { eventHandler(e, 8); }
    window.onkeypress   = function(e) { eventHandler(e, 9); } // textinput
    requestAnimationFrame(draw);
    setInterval(computeFPS, 1000);
    _game();
}
*/

function resize() {
    var c;
    for (var i = 0; i < CM.layers; i++) {
        c = document.getElementById("canvas" + i);
        c.width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) - 20;
        c.height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 20 - $("#logger").height() - $(".commander").height() - 40;
    }
    w = document.getElementById("canvas0").width;
    h = document.getElementById("canvas0").height;
    /*
    for (var i = 0; i < layers; i++) {
        recursiveDraw(objectsTree[i]);
    }
    */
}

/*
function _game() {
    // p = performance.now();
    if (init) {
        addObject(...);
        init = false;
    }
    clear();
    drawAll();
    checkNext(_game);
    // console.log(performance.now() - p);
}
*/
