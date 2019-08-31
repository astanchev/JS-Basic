function solve([stringInput, repeats]){
    function repeatString(str, count) {
        let result = "";

        for (let i = 0; i < count; i++) {
            result += str;
        }

        return result;
    }

    const str = stringInput;
    const count = parseInt(repeats);

    let result = repeatString(str, count);

    console.log(result);
}

solve(["str", "2"]);