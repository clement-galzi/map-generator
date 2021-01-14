let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let image = document.getElementById("source");
// ctx.drawImage(image, coordX de la tile (multiple de 32),
// coordY de la tile (multiple de 48 + 16), 32, 48,
// coordX où on veut mettre la tile,
// coordY où on veut mettre la tile, 32, 48);
// ex ctx.drawImage(image, 32, 16, 32, 48, 50, 0, 32, 48);
ctx.drawImage(image, 32, 64, 32, 48, 100, 50, 32, 48);
