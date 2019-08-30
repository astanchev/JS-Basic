function bulsAndCows(input){
    let secretNumber = Number(input.shift());
    let numberBulls = Number(input.shift());
    let numberCows = Number(input.shift());

    let solutionFound = false;
    let result = "";

    for (let digit1 = 1; digit1 <= 9; digit1++)
    {
        for (let digit2 = 1; digit2 <= 9; digit2++)
        {
            for (let digit3 = 1; digit3 <= 9; digit3++)
            {
                for (let digit4 = 1; digit4 <= 9; digit4++)
                {
                    let secretDigit1 = Math.floor(secretNumber / 1000) % 10;
                    let secretDigit2 = Math.floor(secretNumber / 100) % 10;
                    let secretDigit3 = Math.floor(secretNumber / 10) % 10;
                    let secretDigit4 = Math.floor(secretNumber / 1) % 10;
                    let digitToCheck1 = digit1;
                    let digitToCheck2 = digit2;
                    let digitToCheck3 = digit3;
                    let digitToCheck4 = digit4;
                    let currentBulls = 0;
                    let currentCows = 0;

                    if (digitToCheck1 === secretDigit1)
                    {
                        currentBulls++;
                        secretDigit1 = -1;
                        digitToCheck1 = -2;
                    }
                    if (digitToCheck2 === secretDigit2)
                    {
                        currentBulls++;
                        secretDigit2 = -1;
                        digitToCheck2 = -2;
                    }
                    if (digitToCheck3 === secretDigit3)
                    {
                        currentBulls++;
                        secretDigit3 = -1;
                        digitToCheck3 = -2;
                    }
                    if (digitToCheck4 === secretDigit4)
                    {
                        currentBulls++;
                        secretDigit4 = -1;
                        digitToCheck4 = -2;
                    }

                    if (digitToCheck1 === secretDigit2)
                    {
                        currentCows++;
                        secretDigit2 = -1;
                    }
                    else if (digitToCheck1 === secretDigit3)
                    {
                        currentCows++;
                        secretDigit3 = -1;
                    }
                    else if (digitToCheck1 === secretDigit4)
                    {
                        currentCows++;
                        secretDigit4 = -1;
                    }
                    if (digitToCheck2 === secretDigit1)
                    {
                        currentCows++;
                        secretDigit1 = -1;
                    }
                    else if (digitToCheck2 === secretDigit3)
                    {
                        currentCows++;
                        secretDigit3 = -1;
                    }
                    else if (digitToCheck2 === secretDigit4)
                    {
                        currentCows++;
                        secretDigit4 = -1;
                    }
                    if (digitToCheck3 === secretDigit1)
                    {
                        currentCows++;
                        secretDigit1 = -1;
                    }
                    else if (digitToCheck3 === secretDigit2)
                    {
                        currentCows++;
                        secretDigit2 = -1;
                    }
                    else if (digitToCheck3 === secretDigit4)
                    {
                        currentCows++;
                        secretDigit4 = -1;
                    }
                    if (digitToCheck4 === secretDigit1)
                    {
                        currentCows++;
                        secretDigit1 = -1;
                    }
                    else if (digitToCheck4 === secretDigit2)
                    {
                        currentCows++;
                        secretDigit2 = -1;
                    }
                    else if (digitToCheck4 === secretDigit3)
                    {
                        currentCows++;
                        secretDigit3 = -1;
                    }

                    if (currentBulls === numberBulls && currentCows === numberCows)
                    {
                        if (solutionFound)
                        {
                            result += " ";
                        }

                        result += "" + digit1 + digit2 + digit3 + digit4;
                        solutionFound = true;
                    }
                }
            }
        }
    }
    
    if (!solutionFound)
    {
        console.log("No");
    }
    else{
        console.log(result);
    }
}

bulsAndCows(["2228", "2", "1"]);