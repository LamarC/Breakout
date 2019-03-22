var canvas = document.getElementById("theCanvas");
var ctx = canvas.getContext("2d");

//Making a backg rectangle
ctx.beginPath();
ctx.rect(40, 60, 70, 70);
ctx.fillStyle = "#F08080";
ctx.fill();
// ctx.closePath();

//Making a circle
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "#800080";
ctx.fill();
// ctx.closePath();

//rectangle
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "#20B2AA";
ctx.stroke();
ctx.closePath();
