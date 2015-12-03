/*
 * Color Madness by pie3636, 2015. Code under license CC BY-SA ─ https://creativecommons.org/licenses/by-sa/3.0/
 * Full legal stuff at https://creativecommons.org/licenses/by-sa/3.0/legalcode
 */

"use strict;"

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

function text(ctx, x, y, w, h, text, font, fillColor, align, valign, strokeColor, stroke) {
    x = W(x), y = H(y), w = W(w), h = H(h);
    ctx.font = h + "pt " + font;
    ctx.fillStyle = fillColor;
    ctx.textAlign = align;
    ctx.textBaseline = valign;
    ctx.fillText(text, x, y, w);
    if (stroke) {
        ctx.strokeStyle = strokeColor;
        ctx.strokeText(t, x, y);
    }
}

function line(ctx, x, y, dx, dy, strokeColor, thickness) {
    x = W(x), y = H(y), dx = W(dx), dy = H(dy);
    ctx.beginPath();
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = thickness;
    ctx.moveTo(x, y);
    ctx.lineTo(x + dx, y + dy);
    ctx.closePath();
    ctx.stroke();
}

