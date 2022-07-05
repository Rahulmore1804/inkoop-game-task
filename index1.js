import Player from "./Player.js";
import Player2 from "./Player2.js";

import BulletController from "./BulletController.js";
import BulletController2 from "./BukketController2.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 550;
canvas.height = 500;

const bulletController = new BulletController(canvas);
const bulletController2 = new BulletController2(canvas);
const player = new Player(
  canvas.width / 2.2,
  canvas.height / 1.3,
  bulletController,
  100
);
const player2 = new Player2(
  canvas.width / 2.2,
  canvas.height / 6.3,
  bulletController2,
  100
);

function gameLoop() {
  setCommonStyle();
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  bulletController.draw(ctx);
  bulletController2.draw(ctx);
  player.draw(ctx);
  player2.draw(ctx);
  if (bulletController.collideWith(player2)) {
    console.log("fjkds");
  }
  if (bulletController2.collideWith(player)) {
    console.log("fjkds");
  }
}

function setCommonStyle() {
  ctx.shadowColor = "#d53";
  ctx.shadowBlur = 20;
  ctx.lineJoin = "bevel";
  ctx.lineWidth = 5;
}

setInterval(gameLoop, 1000 / 60);
