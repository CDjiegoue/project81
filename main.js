canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.linewidth = 1;
ctx.rect(150, 143, 430, 230);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "orange";
ctx.lineWidth = 5;
ctx.arc(300, 300, 40, 0, 2 *Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "green"
ctx.lineWidth = 5;
ctx.arc(400, 300, 40, 0, 2 *Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "blue";
ctx.lineWidth = 5;
ctx.arc(250, 250, 40, 0, 2 *Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "black";
ctx.lineWidth = 5;
ctx.arc(350, 250, 40, 0, 2 *Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "red";
ctx.lineWidth = 5;
ctx.arc(450, 250, 40, 0, 2 *Math.PI)
ctx.stroke();