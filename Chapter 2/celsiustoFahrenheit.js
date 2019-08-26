function celsiusToFahrenheit([arg1]) {
    let degreesC = Number(arg1);
    let degreesF = degreesC * 9 / 5 + 32;
    console.log(degreesF.toFixed(2)); 
}

celsiusToFahrenheit([25]);