function currencyConverter([arg1, arg2, arg3]) {
    let currValue = Number(arg1);
    let fromCurrency = arg2;
    let toCurrency = arg3;

    switch (fromCurrency) {
        case "USD":
            currValue *= 1.79549;
            break;
        case "EUR":
            currValue *= 1.95583;
            break;
        case "GBP":
            currValue *= 2.53405;
            break;
        default:
            break;
    }

    switch (toCurrency) {
        case "USD":
            currValue /= 1.79549;
            break;
        case "EUR":
            currValue /= 1.95583;
            break;
        case "GBP":
            currValue /= 2.53405;
            break;
        default:
            break;
    }
    console.log(currValue.toFixed(2));
}

currencyConverter([20, "USD", "BGN"]);