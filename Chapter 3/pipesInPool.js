function pipesInPool(args) {
    let [volume, pipe1, pipe2, hours]= args[0].split("\n").map(Number);
    
    let litersPipe1 = pipe1 * hours;
    let litersPipe2 = pipe2 * hours;
    let litersFull = litersPipe1 + litersPipe2;

    let percentageFull = (litersFull / volume) * 100;
    let percentagePipe1 = (litersPipe1 / litersFull) * 100;
    let percentagePipe2 = (litersPipe2 / litersFull) * 100;


    if (litersFull <= volume) {
        console.log(`The pool is ${Math.floor(percentageFull)}% full. Pipe 1: ${Math.floor(percentagePipe1)}%. Pipe 2: ${Math.floor(percentagePipe2)}%.`);
    }
    
    else {
        console.log(`For ${hours} hours the pool overflows with ${Math.round((litersFull - volume)*100)/100} liters.`);
    }
}

pipesInPool("1000\n100\n120\n3");
//pipesInPool(["100 \n 100 \n 100 \n 2.5"]);
