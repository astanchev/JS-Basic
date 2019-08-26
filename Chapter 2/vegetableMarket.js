function vegetableMarket([arg1, arg2, arg3, arg4]){
    var priceVegetables = Number(arg1);
    var priceFruits = Number(arg2);
    var kgVegetables = Number(arg3);
    var kgFruits = Number(arg4);

    var totalIncome =(priceVegetables*kgVegetables + priceFruits*kgFruits) / 1.94;

    console.log(totalIncome);
}

vegetableMarket([0.194, 19.4, 10, 10]);
vegetableMarket([1.5, 2.5, 10, 10]);
