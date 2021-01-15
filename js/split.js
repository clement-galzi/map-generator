let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let image = document.getElementById("source");
// ctx.drawImage(image, coordX de la tile (multiple de 32),
// coordY de la tile (multiple de 48 + 16), 32, 48,
// coordX où on veut mettre la tile,
// coordY où on veut mettre la tile, 32, 48);
// ex : ctx.drawImage(image, 32, 16, 32, 48, 50, 0, 32, 48);
ctx.drawImage(image, 0, 16, 32, 48, 100, 50, 32, 48);

function initTabHex(){
    let tab = [];
    for (let i=0; i<10; i++){
        let tabLigne = [];
        for (let j=0; j<16; j++){
            if (i===3){
                if (j>11){
                    j = 16;
                }
            }
            if (i===4){
                if (j>5){
                    j = 16;
                }
            }
            if (i===5){
                if (j>12){
                    j = 16;
                }
            }
            if (i===6){
                if (j>13){
                    j = 16;
                }
            }
            if (i===7){
                if (j>9){
                    j = 16;
                }
            }
            if (i===8){
                if (j>12){
                    j = 16;
                }
            }
            if (i===9){
                if (j>3){
                    j = 16;
                }
                else {
                    tabLigne.push(i*16+j);
                }
            }
            else {
                tabLigne.push(i*16+j);
            }
        }
        tab.push(tabLigne);
    }
    return tab;
}
console.log(initTabHex());
function printHex(idHex, coordX, coordY){

}
let tab = initTabHex();
console.log(tab);