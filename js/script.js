const HEXTILES_IMAGE = new Image();
HEXTILES_IMAGE.src = '../images/fantasyhextiles_v3.png';
Promise.all([
    new Promise( (resolve) => {HEXTILES_IMAGE.addEventListener('load', () => { resolve();}); })
])
    .then(() => {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        var image = document.getElementById("source");

        ctx.drawImage(image, 33, 71, 104, 124, 21, 20, 87, 104);
    });
