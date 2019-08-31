function solve(n) {
    function printSign(num) {
        if (num > 0) {
            console.log(`The number ${num} is positive.`);
        } else if (num < 0) {
            console.log(`The number ${num} is negative.`);
        } else {
            console.log(`The number ${num} is zero.`);
        }
    }

    const num = parseInt(n);

    printSign(num);
}

solve(5);
solve(-5);
solve(0);
