var mouseEvent = "";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "blue";
radius = 40;
line_width = 1;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
  mouseEvent = "mousedown";
  color = document.getElementById("color").value;
  line_width = document.getElementById("line_width").value;
  radius = document.getElementById("radius").value;
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
  mouseEvent = "mouseup";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
    current_position_x = e.clientX - canvas.offsetLeft;
    current_position_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown"){
      console.log("current postion of mouse x and y coordinates = ")
      console.log("x = " + current_position_x + " y = " + current_position_y )
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = line_width;
      ctx.arc(current_position_x,current_position_y,radius,0 ,2 * Math.PI);
      ctx.stroke();
    }


}

 function cleararea(){
    ctx.clearRect(0,0 ,canvas.width , canvas.height);
 }