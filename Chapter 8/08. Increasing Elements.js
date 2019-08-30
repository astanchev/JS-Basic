function solve(input) {
    let countCurrentLongest = 0;
    let countLongest = 0;
    let numPrev = 0;
    let num = 0;

    let n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        num = Number(input[i]);

        if(num > numPrev) {
            countCurrentLongest++;
        } else {
            countCurrentLongest = 1;
        }

        if(countCurrentLongest > countLongest) {
            countLongest = countCurrentLongest;
        }

        numPrev = num;
    }

    console.log(countLongest);
}

solve([3, 5, 2, 4]);
solve([4, 2, 8, 7, 6]);
solve([4, 1, 2, 4, 4]);
solve([4, 5, 6, 7, 8]);