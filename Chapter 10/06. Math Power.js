function solve([num, power]) {
    function calculatePower(a, b) {
        return Math.pow(a, b);
    }

    const a = Number(num);
    const b = Number(power);

    const result = calculatePower(a, b);

    console.log(result);
}

solve([3, 4]);