/*
 * Color Madness by pie3636, 2015. Code under license CC BY-SA ─ https://creativecommons.org/licenses/by-sa/3.0/
 * Full legal stuff at https://creativecommons.org/licenses/by-sa/3.0/legalcode
 */

// Use integer coordinates
// Avoid scaling images
// Layer canvas (z-index)
// Avoid text rendering, shadowBlur
// performance.now();

var layers = 1, frame = 0, _0, w, h, screen = 0, init = true, _ = [], ctx = [];

var objects = [[]];

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
    _0 = ctx[0];
    _[0].oncontextmenu  = function(e) { eventHandler(e, 0); }
    _[0].ondblclick     = function(e) { eventHandler(e, 1); }
    _[0].onmousedown    = function(e) { eventHandler(e, 2); }
    _[0].onmouseenter   = function(e) { eventHandler(e, 3); }
    _[0].onmouseleave   = function(e) { eventHandler(e, 4); }
    _[0].onmousemove    = function(e) { eventHandler(e, 5); }
    _[0].onmouseover    = function(e) { eventHandler(e, 6); }
    _[0].onmouseout     = function(e) { eventHandler(e, 7); }
    _[0].onmouseup      = function(e) { eventHandler(e, 8); }
    requestAnimationFrame(draw);
    setInterval(computeFPS, 1000);
    _serverConnection();
    window.onresize = resize;
}

function eventHandler(e, type) {
    var O, o;
    for (i in objects[screen]) {
        O = objects[screen][i];
        if (O.type == "button") {
            O.currentColor = insideRect(e, O.loc.x, O.loc.y, O.loc.w, O.loc.h) ? O.color.over : O.color.standard;
            if (O.children) {
                for (j in O.children) {
                    o = O.children[j]; //TODO : recursive
                    o.currentColor = insideRect(e, O.loc.x, O.loc.y, O.loc.w, O.loc.h) ? o.color.over : o.color.standard;
                }
            }
        }
    }

    switch (screen) {
        case 0: // _serverConnection();
            break;
    }
}

function resize() {
    var c
    for (var i = 0; i < layers; i++) {
        c = document.getElementById("canvas" + i);
        //c.width = 1024;
        //c.height = 768;
        c.width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) - 30;
        c.height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 5;
    }
    w = document.getElementById("canvas0").width,
    h = document.getElementById("canvas0").height;
    drawObjects(objects);
}

function draw() {
    var c;
    for (var i = 0; i < layers; i++) {
        c = _[i].getContext("2d");
        c.fillStyle = "black";
        c.fillRect(0, 0, w, h);
        c.drawImage(_[i].offscreen, 0, 0);
    }
    frame++;
    requestAnimationFrame(draw);
}

function computeFPS() {
    //console.log(frame + " FPS");
    frame = 0;
}

function _serverConnection() {
    if (init) {
        addObject(0, {type: "button", name: "id", loc: {x: .42, y: .55, w: .16, h: .05}, r: 5, color: {standard: "grey", over: "wheat"}, thickness: 2});
        addObject(0, {type: "button", name: "pw", loc: {x: .42, y: .62, w: .16, h: .05}, r: 5, color: {standard: "grey", over: "wheat"}, thickness: 2});
        addObject(0, {type: "button", name: "connect", loc: {x: .45, y: .7, w: .1, h: .08}, r: 5, color: {standard: "grey", over: "wheat"}, thickness: 2});
        init = false;
    }
    clear();
    drawObjects(objects);
    text(_0, .5, .74, .1, .03, "Connect", "Arial", "grey"); //TODO : Remove
    requestAnimationFrame(_serverConnection);
}

function addObject(c, o, parent) {
    if (typeof parent === 'undefined') {
        objects[screen][objects[screen].length] = o;
    } else {
        //TODO : find parent (binary search) and add to it
    }
    o.ctx = ctx[c];
    if (o.type == "button") {
        o.currentColor = o.color.standard;
    }
}

function drawObjects(objects) {
    var O;
    for (var i in objects[screen]) {
        O = objects[screen][i];
        if (O.type == "button") {
            button(O.ctx, O.loc.x, O.loc.y, O.loc.w, O.loc.h, O.r, O.currentColor, O.thickness);
        }
        if (O.children) {
            drawObjects(O.children);
        }
    }
}

function clear() {
    for (var i = 0; i < layers; i++) {
        ctx[i].fillStyle = "black";
        ctx[i].fillRect(0, 0, w, h);
    }
}

function insideRect(e, x0, y0, w, h) {
    x0 = W(x0), y0 = H(y0), w = W(w), h = H(h);
    return x0 <= e.offsetX && e.offsetX <= x0 + w && y0 <= e.offsetY && e.offsetY <= y0 + h;
}

function button(ctx, x, y, w, h, r, strokeColor, thickness, fillColor, fill) {
    x = W(x), y = H(y), w = W(w), h = H(h);
    ctx.beginPath();
    ctx.lineWidth = thickness;
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.arc(x + w - r, y + r, r, 1.5*Math.PI, 0);
    ctx.lineTo(x + w, y + h - r);
    ctx.arc(x + w - r, y + h - r, r, 0, Math.PI/2);
    ctx.lineTo(x + r, y + h);
    ctx.arc(x + r, y + h - r, r, Math.PI/2, Math.PI);
    ctx.lineTo(x, y + r);
    ctx.arc(x + r, y + r, r, Math.PI, 1.5*Math.PI);
    ctx.closePath();
    ctx.strokeStyle = strokeColor;
    ctx.stroke();
    if (fill) {
        ctx.fillStyle = fillColor;
        ctx.fill();
    }
}

function text(ctx, x, y, w, h, text, font, fillColor, strokeColor, stroke, align, valign) {
    x = W(x), y = H(y), w = W(w), h = H(h);
    ctx.font = h + "pt " + font;
    ctx.fillStyle = fillColor;
    ctx.textAlign = align ? align : "center";
    ctx.textBaseline = valign ? valign : "middle";
    ctx.fillText(text, x, y, w);
    if (stroke) {
        ctx.strokeStyle = strokeColor;
        ctx.strokeText(t, x, y);
    }
}

function W(i) {
    return Math.floor(i * w);
}

function H(i) {
    return Math.floor(i * h);
}




























