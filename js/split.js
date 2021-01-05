let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let image = document.getElementById("source");

ctx.drawImage(image, 32, 16, 32, 32, 50, 10, 32, 32);

