function dailyProfit([arg1, arg2, arg3]) {
    var workDays = Number(arg1);
    var moneyPerDay = Number(arg2);
    var lvPerDollar = Number(arg3);

    var monthlyPay = workDays * moneyPerDay;
    var yearlyPay = monthlyPay * 14.5;
    var payWithTaxes = yearlyPay * 0.75;
    var earningsPerDay = payWithTaxes / 365;

    console.log((earningsPerDay * lvPerDollar).toFixed(2));
}

dailyProfit([21, 75.00, 1.59]);
dailyProfit([15, 105, 1.71]);
dailyProfit([22, 199.99, 1.50]);
