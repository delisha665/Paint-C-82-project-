canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");


lastx = 0
lasty = 0

canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e) {
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
}
mouseEvent = ""
canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e) {
    currentx = e.clientX - canvas.offsetLeft;
    currenty = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(currentx, currenty, radius, 0, Math.PI * 2)
        ctx.stroke();
    }
    lastx = currentx;
    lasty = currenty;
}

canvas.addEventListener("mouseleave", myMouseleave);
function myMouseleave(e) {
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e) {
    mouseEvent = "mouseUp";
}