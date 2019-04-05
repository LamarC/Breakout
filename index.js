let canvas = document.getElementById("theCanvas");
let ctx = canvas.getContext("2d");

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  drawBricks(brickConfig, bricks);
  collisionDetection();
  x += dx;
  y += dy;

  //Hace que la direccion se invierta en cualquiera de los casos. Lo mantiene "dentro"
  //De arriba a abajo
  if (y + dy < ballRadius) {
    //top
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius)
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    } else {
      alert("GAME OVER");
      document.location.reload();
      clearInterval(interval); //cancela la alerta creada por el evento, resets the game
    }

  //Derecha a izquierda
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
}

//Ball
let x = canvas.width / 5;
let y = canvas.height - 30;
let dx = 2; //Numero de movimientos
let dy = -2; //Same
const ballRadius = 10;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#800080";
  ctx.fill();
  ctx.closePath();
}

//Paddle

//Paddler movement
document.addEventListener("keydown", keyLeftHandler, false);
document.addEventListener("keydown", keyRightHandler, false);

let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;
let px = 10;

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

//Direccion de la bola en relacion con el paddle
if (y + dy < ballRadius) {
  //top
  dy = -dy;
} else if (y + dy > canvas.height - ballRadius)
  if (x > paddleX && x < paddleX + paddleWidth) {
    dy = -dy;
  } else {
    alert("GAME OVER");
    document.location.reload();
    clearInterval(interval); //cancela la alerta creada por el evento, resets the game
  }

//Derecha a izquierda
if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
  dx = -dx;
}

let interval = setInterval(draw, 10);

function keyLeftHandler(e) {
  // console.log(e);
  if (e.code == "ArrowLeft") {
    paddleX -= px;
  }
}

function keyRightHandler(e) {
  if (e.code == "ArrowRight") {
    paddleX += px;
  }
}

//Create a pause bttn

//Bricks
// const brickRowCount = 3;
// const brickColumnCount = 5;
// const brickWidth = 75;
// const brickHeight = 20;
// const brickPadding = 10;
// const brickOffsetTop = 30;
// const brickOffsetLeft = 30;

let bricks = [];

for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];

  for (let r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, broken: false };
  }
}

// function drawBricks() {
//   for (let c = 0; c < brickColumnCount; c++) {
//     for (let r = 0; r < brickRowCount; r++) {
//       if (bricks[c][r].broken == false) {
//         const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
//         const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
//         bricks[c][r].x = brickX;
//         bricks[c][r].y = brickY;
//         ctx.beginPath();
//         ctx.rect(brickX, brickY, brickWidth, brickHeight);
//         ctx.fillStyle = "#0095DD";
//         ctx.fill();
//         ctx.closePath();
//       }
//     }
//   }
// }

//Bricks colision
function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      let b = bricks[c][r];
      if (b.broken == false) {
        if (
          x > b.x &&
          x < b.x + brickWidth &&
          (y > b.y && y < b.y + brickHeight)
        ) {
          dy = -dy;
          b.broken = true;
          score++;
          if (score == brickRowCount * brickColumnCount) {
            alert("too easy!");
            document.location.reload();
            clearInterval(interval);
          }
        }
      }
    }
  }
}

let score = 0;

let brickConfig = {
  brickRowCount: 3,
  brickColumnCount: 5,
  brickWidth: 75,
  brickHeight: 20,
  brickPadding: 10,
  brickOffsetTop: 30,
  brickOffsetLeft: 30
};

/**
 * draws bricks in canvas using the state of the bricks argument and settings from brickConfig
 * @param {Object} brickConfig
 * @param {Array} bricks
 */
function drawBricks(brickConfig, bricks) {
  for (let c = 0; c < brickConfig.brickColumnCount; c++) {
    for (let r = 0; r < brickConfig.brickRowCount; r++) {
      if (bricks[c][r].broken == false) {
        const brickX =
          c * (brickConfig.brickWidth + brickConfig.brickPadding) +
          brickConfig.brickOffsetLeft;
        const brickY =
          r * (brickConfig.brickHeight + brickConfig.brickPadding) +
          brickConfig.brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(
          brickX,
          brickY,
          brickConfig.brickWidth,
          brickConfig.brickHeight
        );
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}
