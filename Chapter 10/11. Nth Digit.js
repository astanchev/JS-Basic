function solve([number, index]) {
    function findNthDigit(num, ind) {

        let count = 1;

        while (num != 0) {
            let digit = num % 10;

            if (ind === count) {
                return digit;
            }

            //num = parseInt(num / 10);
            //num = (num / 10 | 0);
            num = ~~(num / 10);
            //num = (num / 10 >> 0);


            count++;
        }

        return 0;
    }

    let num = parseInt(number);
    let ind = parseInt(index);

    let result = findNthDigit(num, ind);

    console.log(result);
}

solve(["93847837", "6"]);