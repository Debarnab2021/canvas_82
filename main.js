var mouseEvent="empty";
var last_position_of_x, last_position_of_y;
radius=40;
var radius= document.getElementById("radius_get").value;

canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_of_line=1;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    color=document.getElementById("color").value;
    console.log(color);
    width_of_line=document.getElementById("width_of_line").value;
    console.log(width_of_line);
    mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;
    if(radius==0){
        radius=40;
    }
    else{
        radius=document.getElementById("radius_get").value;
    }
    if(mouseEvent=="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,Math.PI*2);
        ctx.stroke();
    }
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}
function clearArea()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}