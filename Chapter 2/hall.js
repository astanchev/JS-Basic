function hall([arg1, arg2]) {

    var length = parseFloat(arg1);
    var width = parseFloat(arg2);

    var totalRows = Math.floor(length / 1.2);
    var totalCols = Math.floor((width - 1) / 0.7);

    var totalWorkPlaces = totalRows * totalCols - 3;

    console.log(totalWorkPlaces);
}

hall([15, 8.9]);
hall([8.4, 5.2]);