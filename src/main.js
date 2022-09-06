const canvas = document.querySelector("#board canvas");

const ctx = canvas.getContext("2d");

const canvasWidth = ctx.canvas.width;
const canvasHeight = ctx.canvas.height;

const width = 80;
const height = 40;

const tiles = 5;

ctx.strokeStyle = "black";
ctx.fillStyle = "pink";

for (let i = 0; i <= 5; i++) {
  for (let j = 0; j <= 5; j++) {
    const x = width * j;
    const y = height * i;
    ctx.strokeRect(x, y, width, height);
  }
}
