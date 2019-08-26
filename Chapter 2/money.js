function money([arg1, arg2, arg3]) {
    var bitcoins = Number(arg1);
    var chYuana = Number(arg2);
    var commision = Number(arg3);

    var bitcoinsInLv = bitcoins * 1168;
    var yuanaInLv = chYuana * 0.15 * 1.76;
    var sumInLv = bitcoinsInLv + yuanaInLv;

    var sumInEur = sumInLv / 1.95;
    var sumInEurWithCommision = sumInEur * (1 - commision / 100);
    console.log(sumInEurWithCommision.toFixed(2));
}

money([1, 5, 5]);
money([7, 50200.12, 3]);
money([20, 5678, 2.4]);