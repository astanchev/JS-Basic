function logistics(args) {
    args = args.map(Number);

    let n = args[0];
    let microbusPrice = 200;
    let truckPrice = 175;
    let trainPrice = 120;
    let microbusCount = 0;
    let truckCount = 0;
    let trainCount = 0;
    let allTons = 0;

    for (let i = 1; i < args.length; i++) {

        if (args[i] <= 3) {
            microbusCount += args[i];
        } else if (args[i] >= 4 && args[i] <= 11) {
            truckCount += args[i];
        } else if (args[i] >= 12) {
            trainCount += args[i];
        }

        allTons += args[i];
    }

    let averagePrice = ((microbusCount * microbusPrice) + (truckCount * truckPrice) + (trainCount * trainPrice)) / allTons;
    let percentageMicrobus = (microbusCount / allTons) * 100;
    let percentageTruck = (truckCount / allTons) * 100;
    let percentageTrain = (trainCount / allTons) * 100;

    console.log(averagePrice.toFixed(2));
    console.log(`${percentageMicrobus.toFixed(2)}%`);
    console.log(`${percentageTruck.toFixed(2)}%`);
    console.log(`${percentageTrain.toFixed(2)}%`);
}