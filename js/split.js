let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let image = document.getElementById("source");
// ctx.drawImage(image, coordX de la tile (multiple de 32),
// coordY de la tile (multiple de 48 + 16), 32, 48,
// coordX où on veut mettre la tile,
// coordY où on veut mettre la tile, 32, 48);
// ex : ctx.drawImage(image, 32, 16, 32, 48, 50, 0, 32, 48);
//ctx.drawImage(image, 0, 16, 32, 48, 100, 50, 32, 48);

function initTabHex(){
    let tab = [];
    let indice = 0;
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
                    tabLigne.push(indice);
                    indice ++;
                }
            }
            else {
                tabLigne.push(indice);
                indice ++;
            }
        }
        tab.push(tabLigne);
    }
    return tab;
}
let tab = initTabHex();
//Find return undefined quand il ne trouve pas la valeur
function getCoordFromId(idHex){
    let found;
    let coordX;
    let coordY;
    for (let i=0; i<10; i++){
        found = tab[i].findIndex(element => element === idHex);
        if (found !== -1){
            coordY = i;
            coordX = found;
        }
    }
    return [coordX, coordY];
}
function printHex(idHex, coordX, coordY){
    let coord = getCoordFromId(idHex);
    ctx.drawImage(image, coord[0]*32, coord[1]*48, 32, 48, coordX, coordY, 32, 48);
}
printHex(1,56,34);
printHex(17,32,48);
printHex(96,56,62);