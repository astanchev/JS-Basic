function solve([type, first, second]) {
    function getMaxInt(int1, int2) {
        if (int1 > int2) {
            return int1;
        } else {
            return int2;
        }
    }

    function getMaxChar(char1, char2) {
        if (char1 > char2) {
            return char1;
        } else {
            return char2;
        }
    }

    function getMaxString(firstString, secondString) {
        let result = "";

        for (let i = 0; i < firstString.length; i++) {
            if (firstString[i] > secondString[i]) {
                result = firstString;
                return result;
            } else if (firstString[i] < secondString[i]) {
                result = secondString;
                return result;
            }

            result = firstString;
        }

        return result;
    }

    let result = "";

    switch (type) {
        case "int":{
            let firstNumber = Number(first);
            let secondNumber = Number(second);

            result = getMaxInt(firstNumber, secondNumber);
        }
            break;
        case "char":{
            let firstChar = first.charCodeAt(0);
            let secondChar = second.charCodeAt(0);

            let ascii = getMaxChar(firstChar, secondChar);

            result = String.fromCharCode(ascii);
        }
            break;
        case "string":{
            let firstString = first;
            let secondString = second;

            result = getMaxString(firstString, secondString);
        }
            break;
        default:
            break;
    }

    console.log(result);
}

solve([ 'int', '2', '16' ]);