function solve(input) {
    function encript(letter) {

        let currentResult = "";
        let firstDigit = "";
        let lastDigit = "";

        let ascii = letter.charCodeAt(0);

        lastDigit += (ascii % 10);

        if (ascii > 99) {

            firstDigit += 1;
        } else {

            firstDigit += (ascii / 10 | 0);
        }

        currentResult += firstDigit + lastDigit;

        let begining = String.fromCharCode(ascii + parseInt(lastDigit));
        let end = String.fromCharCode(ascii - parseInt(firstDigit));

        currentResult = (begining + currentResult + end);

        return currentResult;
    }

    let n = input.shift();
    let result = "";

    for (let i = 0; i < n; i++) {
        let letter = input.shift();

        result += encript(letter);
    }

    console.log(result);
}

solve(["4", "s", "l", "a", "p"]);
solve(["7", "S", "o", "f", "t", "U", "n", "i"]);