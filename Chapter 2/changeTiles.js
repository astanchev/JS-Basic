function tileRepair([arg1, arg2, arg3, arg4, arg5]) {
    var n = Number(arg1);
    var w = Number(arg2);
    var l = Number(arg3);
    var m = Number(arg4);
    var o = Number(arg5);

    var area = n * n;
    var tileArea = w * l;
    var seatArea = m * o;
    var areaWithTiles = area - seatArea;

    var tilesCount = areaWithTiles / tileArea;

    var time = tilesCount * 0.2;

    console.log(Math.round(tilesCount * 100) / 100);
    console.log(Math.round(time * 100) / 100);
}

tileRepair([20, 5, 4, 1, 2]);
tileRepair([40, 0.8, 0.6, 3, 5]);