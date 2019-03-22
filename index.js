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
let dx = 2;
let dy = -2;
const ballRadius = 10;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#800080";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  x += dx;
  y += dy;

  //Esto que la direccion se invierta en cualquiera de los casos. Lo mantiene "dentro"
  //De arriba a abajo
  if(y + dy > canvas.height || y + dy < 0) {
      dy = -dy;
  }

  //Derecha a izquierda
  if(x + dx > canvas.width || x + dx < 0) {
    dx = -dx;
}

}
setInterval(draw, 10);


// //rectangle
// ctx.beginPath();
// ctx.rect(160, 10, 100, 40);
// ctx.strokeStyle = "#20B2AA";
// ctx.stroke();
// ctx.closePath();
