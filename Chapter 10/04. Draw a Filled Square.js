function solve(n) {
    function printHeaderFooter(num) {
        console.log("-".repeat(2 * num));
    }

    function printMiddleRow(num) {
        let line = "-";

        for (let i = 0; i < num - 1; i++) {
            line += "\\/";
        }

        line += "-";

        console.log(line);
    }

    const num = parseInt(n);

    printHeaderFooter(num);
    
    for (let i = 0; i < num - 2; i++) {

        printMiddleRow(num);
    }

    printHeaderFooter(num);
}

solve(4);
