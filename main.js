var mouseEvent = "empty";
var color = "black";
var width_of_line = 1;
var radius = 5;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("color").value || 'black';
    width_of_line = parseInt(document.getElementById("width_of_line").value) || 3;
    radius = parseInt(document.getElementById("radius").value) || 5;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        console.log("last position of x and y cordinates = ");
        console.log("x =" + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseLeave";
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}