function fiveSpecialLetters(input){
    let start = Number(input.shift());
    let end = Number(input.shift());
   
    let weight = 0;
    let printed = false;
    let result = "";

    for (let i = 'a'.charCodeAt(0); i <= 'e'.charCodeAt(0); i++)
    {
        for (let j = 'a'.charCodeAt(0); j <= 'e'.charCodeAt(0); j++)
        {
            for (let k = 'a'.charCodeAt(0); k <= 'e'.charCodeAt(0); k++)
            {
                for (let l = 'a'.charCodeAt(0); l <= 'e'.charCodeAt(0); l++)
                {
                    for (let m = 'a'.charCodeAt(0); m <= 'e'.charCodeAt(0); m++)
                    {
                        let word = String.fromCharCode(i);
                        if (!word.includes(String.fromCharCode(j))) {
                            word += String.fromCharCode(j);
                        }
                        if (!word.includes(String.fromCharCode(k))) {
                            word += String.fromCharCode(k);
                        }
                        if (!word.includes(String.fromCharCode(l))) {
                            word += String.fromCharCode(l);
                        }
                        if (!word.includes(String.fromCharCode(m))) {
                            word += String.fromCharCode(m);
                        }
                        
                        for (let d = 1; d <= word.length; d++)
                        {
                            switch (word[d-1])
                            {
                                case 'a':
                                    weight += d * 5;
                                    break;
                                case 'b':
                                    weight += d * -12;
                                    break;
                                case 'c':
                                    weight += d * 47;
                                    break;
                                case 'd':
                                    weight += d * 7;
                                    break;
                                case 'e':
                                    weight += d * -32;
                                    break;
                                default:
                                    break;
                            }
                        }

                        if (weight >= start && weight <= end)
                        {
                            printed = true;
                            result += String.fromCharCode(i) + String.fromCharCode(j) + String.fromCharCode(k) + String.fromCharCode(l) + String.fromCharCode(m) + " ";

                        }

                        weight = 0;
                    }
                }
            }
        }
    }


    if (!printed) {
        console.log("No");
    }
    else{
        console.log(result.trim());
    }
}

fiveSpecialLetters(["40", "42"]);
fiveSpecialLetters(["300", "400"]);
fiveSpecialLetters(["-1", "1"]);
fiveSpecialLetters(["200", "300"]);
