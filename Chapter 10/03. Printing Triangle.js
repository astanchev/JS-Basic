function solve(n) {
    function printLine(start, end) {
        let line = "";
        for (let i = start; i <= end; i++) {
            line += i + " ";
        }

        console.log(line.trim());
    }

    for (let i = 0; i < n; i++) {
        printLine(1, i);
    }

    printLine(1, n);

    for (let i = n-1; i > 0; i--) {
        printLine(1, i);
    }
}

solve(5);