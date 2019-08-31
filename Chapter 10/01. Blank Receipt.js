function solve() {
    function printReceiptHeader() {
        console.log("CASH RECEIPT");
        console.log('-'.repeat(30));
    }

    function printReceiptBody() {
        console.log("Charged to" + '_'.repeat(20));
        console.log("Received by" + '_'.repeat(19));
    }

    function printReceiptFooter() {
        console.log('-'.repeat(30));
        console.log("(c) SoftUni");
    }

    function printReceipt() {
        printReceiptHeader();
        printReceiptBody();
        printReceiptFooter();
    }

    printReceipt();
}


solve();