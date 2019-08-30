function lettersCombinations(input) {
    let startLetter = (input.shift()).charCodeAt(0);
    let endLetter = (input.shift()).charCodeAt(0);
    let scipLetter = (input.shift()).charCodeAt(0);
    let counter = 0;
    let result = "";

    for (let i = startLetter; i <= endLetter; i++) {

        if (i == scipLetter) continue;

        for (let j = startLetter; j <= endLetter; j++) {

            if (j == scipLetter) continue;

            for (let k = startLetter; k <= endLetter; k++) {

                if (k == scipLetter) continue;

                result += `${String.fromCharCode(i)}${String.fromCharCode(j)}${String.fromCharCode(k)} `;
                counter++;
            }
        }
    }

    result += counter;

    console.log(result.trim());
}

lettersCombinations(["a", "c", "b"]);
lettersCombinations(["f", "k", "h"]);
