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

var layers = 1, frame = 0, _0, w, h, screen = 0, focus, oldFocus;
var init = true, initFocus = true;
var _ = [], ctx = [], objects = {}, objectsTree = [[]], keys = [], mapKeys = [];
var MAX_SCREEN = 0;


window.onload = function() {
    resize();
    for (var i = 0; i < layers; i++) {
        _[i] = document.getElementById("canvas" + i);
        if (_[i].getContext) {
            _[i].offscreen = document.createElement("canvas");
            _[i].offscreen.width = w;
            _[i].offscreen.height = h;
            ctx[i] = _[i].offscreen.getContext("2d");
        }
    }
    for (var i = 0; i <= MAX_SCREEN; i++) {
        objectsTree[i] = {type: "root", name: "root" + i, children: []};
    }
    _0 = ctx[0];
    _[0].oncontextmenu  = function(e) { eventHandler(e, 0); }
    _[0].ondblclick     = function(e) { eventHandler(e, 1); }
    _[0].onmousedown    = function(e) { eventHandler(e, 2); }
    _[0].onmouseup      = function(e) { eventHandler(e, 3); }
    _[0].onmouseenter   = function(e) { eventHandler(e, 4); } // Canvas
    _[0].onmouseleave   = function(e) { eventHandler(e, 5); } // Canvas
    _[0].onmousemove    = function(e) { eventHandler(e, 6); }
    window.onkeydown    = function(e) { eventHandler(e, 7); }
    window.onkeyup      = function(e) { eventHandler(e, 8); }
    window.onkeypress   = function(e) { eventHandler(e, 9); } // textinput
    requestAnimationFrame(draw);
    setInterval(computeFPS, 1000);
    _serverConnection();
    window.onresize = resize;
}

function resize() {
    var c;
    for (var i = 0; i < layers; i++) {
        c = document.getElementById("canvas" + i);
        // c.width = 1024;
        // c.height = 768;
        c.width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) - 20;
        c.height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 20;
    }
    w = document.getElementById("canvas0").width;
    h = document.getElementById("canvas0").height;
    recursiveDraw(objectsTree[screen]);
}

function _serverConnection() {
    // p = performance.now();
    if (init) {
        focus = "id";
        addObject(0, {type: "textinput", name: "id", loc: {x: .42, y: .55, w: .16, h: .05}, r: 5, color: {standard: "grey", over: "peru", focus: "wheat"}, thickness: 2});
        addObject(0, {type: "textinput", name: "pw", loc: {x: .42, y: .62, w: .16, h: .05}, r: 5, color: {standard: "grey", over: "peru", focus: "wheat"}, thickness: 2});
        addObject(0, {type: "button", name: "connect", loc: {x: .45, y: .7, w: .1, h: .08}, r: 5, color: {standard: "grey", over: "peru", focus: "wheat"}, thickness: 2});
        addObject(0, {type: "text", name: "connecttxt", loc: {x: .5, y: .74, w: .09, h: .03}, color: {}, text: "Connect", noFocus: true}, "connect");
        addObject(0, {type: "text", name: "versiontxt", loc: {x: .01, y: .01, w: 1, h: .02}, color: {standard: "white"}, overColor: false, clickColor: false, text: "Pour Antoine (d'ici que j'ai un numéro de version propre et tout):", font: "Arial", noFocus: true, align:"left", valign:"top"});
        addObject(0, {type: "text", name: "versiontxt", loc: {x: .01, y: .04, w: 1, h: .02}, color: {standard: "olive"}, overColor: false, clickColor: false, text: "- (02/12) Ajouté support clavier extensible (tab/shift-tab)", font: "Arial", noFocus: true, align:"left", valign:"top"});
        addObject(0, {type: "text", name: "versiontxt", loc: {x: .01, y: .07, w: 1, h: .02}, color: {standard: "khaki"}, overColor: false, clickColor: false, text: "- (03/12) Ajouté zones de texte (normalement foolproof, à tester, déplacement du curseur etc)", font: "Arial", noFocus: true, align:"left", valign:"top"});
        init = false;
    }
    clear();
    drawAll();
    requestAnimationFrame(_serverConnection);
    // console.log(performance.now() - p);
}

