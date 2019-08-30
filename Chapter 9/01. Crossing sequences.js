function crossingSequences(input) {
    let tribonacciFirst = Number(input.shift());
    let tribonacciSecond = Number(input.shift());
    let tribonacciThird = Number(input.shift());
    let spiralCurrent = Number(input.shift());
    let step = Number(input.shift());

    let tribonacciCurrent = tribonacciFirst + tribonacciSecond + tribonacciThird;

    let spiralMultiplier = 1;
    let spiralIncrement = 0;

    while (tribonacciCurrent <= 1000000 && spiralCurrent <= 1000000) {
        if (spiralCurrent === tribonacciFirst || spiralCurrent === tribonacciSecond || spiralCurrent === tribonacciThird || spiralCurrent === tribonacciCurrent) {
            console.log(spiralCurrent);
            return;
        } else if (tribonacciCurrent < spiralCurrent) {

            tribonacciFirst = tribonacciSecond;
            tribonacciSecond = tribonacciThird;
            tribonacciThird = tribonacciCurrent;
            tribonacciCurrent = tribonacciFirst + tribonacciSecond + tribonacciThird;
        } else {
            spiralCurrent += spiralMultiplier * step;
            spiralIncrement++;
            
            if (spiralIncrement === 2) {
                spiralMultiplier++;
                spiralIncrement = 0;
            }
        }
    }

    console.log("No");
}

crossingSequences([1, 2, 3, 5, 2]);