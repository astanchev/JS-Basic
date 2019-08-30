function changeTiles(input) {
    let collectedMoney = Number(input.shift());
    let widthFloor = Number(input.shift());
    let lengthFloor = Number(input.shift());
    let sideTriangle = Number(input.shift());
    let higthTriangle = Number(input.shift());
    let priceTile = Number(input.shift());
    let workPrice = Number(input.shift());

    let tileArea = sideTriangle * higthTriangle / 2;
    let totalTiles = Math.ceil(widthFloor * lengthFloor / tileArea) + 5;
    let tilesPrice = totalTiles * priceTile;

    let totalPrice = tilesPrice + workPrice;

    if (totalPrice <= collectedMoney) {
        console.log(`${(collectedMoney - totalPrice).toFixed(2)} lv left.`);
    }
    else{
        console.log(`You'll need ${(totalPrice - collectedMoney).toFixed(2)} lv more.`);
    }
}

changeTiles([1000, 5.55, 8.95, 0.90, 0.85, 13.99, 321]);
changeTiles([500, 3, 2.5, 0.5, 0.7, 7.8, 100]);
