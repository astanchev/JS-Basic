function solve([num, base]) {
    function integerToBase(number, toBase) {
        let integerToBase = "";

        while (number > 0)
        {
            let remainder = number % toBase;
            integerToBase = remainder + integerToBase;
            number = parseInt(number / toBase);
        }

        return integerToBase;
    }

    const number = parseInt(num);
    const toBase = parseInt(base);

    let result = integerToBase(number, toBase);

    console.log(result);
}

solve(["4", "4"]);
solve(["3", "2"]);
solve(["9", "7"]);
