function flowers(input) {
    let numberChrizanthems = Number(input.shift());
    let numberRoses = Number(input.shift());
    let numberTulips = Number(input.shift());
    let season = input.shift();
    let holiday = input.shift();

    let priceChr = 0.0;
    let priceR = 0.0;
    let priceT = 0.0;
    let bouquet = 0.0;

    if (season === "Spring" || season === "Summer") {
        priceChr = 2.0;
        priceR = 4.1;
        priceT = 2.5;

        if (holiday === "Y") {
            priceChr *= 1.15;
            priceR *= 1.15;
            priceT *= 1.15;
        }

        bouquet = priceChr * numberChrizanthems + priceR * numberRoses + priceT * numberTulips;

        if (numberTulips > 7 && season === "Spring") {
            bouquet *= 0.95;
        }

        if (numberChrizanthems + numberRoses + numberTulips > 20) {
            bouquet *= 0.8;
        }

    } else if (season === "Autumn" || season === "Winter") {
        priceChr = 3.75;
        priceR = 4.5;
        priceT = 4.15;

        if (holiday == "Y") {
            priceChr *= 1.15;
            priceR *= 1.15;
            priceT *= 1.15;
        }

        bouquet = priceChr * numberChrizanthems + priceR * numberRoses + priceT * numberTulips;

        if (numberRoses >= 10 && season === "Winter") {
            bouquet *= 0.9;
        }

        if (numberChrizanthems + numberRoses + numberTulips > 20) {
            bouquet *= 0.8;
        }
    }

    bouquet += 2.0;
    console.log(bouquet.toFixed(2));

}

flowers([2, 4, 8, "Spring", "Y"]);
flowers([3, 10, 9, "Winter", "N"]);
