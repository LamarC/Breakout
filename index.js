var canvas = document.getElementById("theCanvas");
var ctx = canvas.getContext("2d");

// //Making a backg rectangle
// ctx.beginPath();
// ctx.rect(40, 60, 70, 70);
// ctx.fillStyle = "#F08080";
// ctx.fill();
// ctx.closePath();

let x = canvas.width / 2;
let y = canvas.height - 30;

//Making a circle
function draw() {
  //
  let dx = 2;
  let dy = -2;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI * 2);
  ctx.fillStyle = "#800080";
  ctx.fill();
  ctx.closePath();
  x += dx;
  y += dy;
}

draw();

setInterval(draw, 10);

// //rectangle
// ctx.beginPath();
// ctx.rect(160, 10, 100, 40);
// ctx.strokeStyle = "#20B2AA";
// ctx.stroke();
// ctx.closePath();
