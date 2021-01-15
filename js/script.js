HEXTILES_IMAGE.src = '../images/hextiles.png';
Promise.all([
    new Promise((resolve) => {
        HEXTILES_IMAGE.addEventListener('load', () => {
            resolve();
        });
    })
]).then(() => {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
    });
