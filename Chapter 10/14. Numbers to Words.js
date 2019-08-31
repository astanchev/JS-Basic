function solve(input) {
    function letterize(number) {
        let result = "";

        let tonineteen = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

        let toninety = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

        if (number < 0) {
            result += "minus ";
            number *= -1;
        }

        if (number >= 0 && number <= 19) {

           // result += tonineteen[number];
        } 
        else if (number >= 20 && number < 100) {

            // if (number % 10 == 0)
            // {

            //    result += toninety[(number / 10 | 0) - 2];
            // }
            // else
            // {

            //    result += toninety[(number / 10 | 0) - 2] + " " + tonineteen[(number % 10)];
            // }
        } 
        else if (number >= 100 && number <= 999) {

            if (number % 100 == 0) {

                result += tonineteen[(number / 100 | 0)];
                result += "-hundred";
            } 
            else {

                result += tonineteen[(number / 100 | 0)];
                result += "-hundred and ";
                let number2 = number - (number / 100 | 0) * 100;

                if (number2 >= 0 && number2 <= 19) {

                    result += tonineteen[number2];
                } 
                else if (number2 >= 20 && number2 < 100) {

                    if (number % 10 == 0) {

                        result += toninety[(number2 / 10 | 0) - 2];
                    } 
                    else {

                        result += toninety[(number2 / 10 | 0) - 2] + " " + tonineteen[(number2 % 10)];
                    }
                }
            }
        }

        console.log(result);
    }



    let numbers = parseInt(input.shift());

    for (let i = 0; i < numbers; i++) {

        let number = parseInt(input.shift());

        if (number <= 999 && number >= -999) {

            letterize(number);
        } else if (number > 999) {

            console.log("too large");
        } else if (number < -999) {

            console.log("too small");
        }
    }

}


solve(["3", "999", "-420", "1020"]);
console.log();
solve(["2", "15", "350"]);
console.log();
solve(["4", "311", "418", "509", "-9945"]);
console.log();
solve(["3", "500", "123", "9"]);