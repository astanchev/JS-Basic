function drawArrow([args1]) {
    let n = Number(args1);

    let outerDots = (n - 1) / 2;
    let innerDots = n - 2;

    console.log(".".repeat(outerDots) + "#".repeat(n) + ".".repeat(outerDots));

    for (let i = 1; i <= n - 2; i++) {
        console.log(".".repeat(outerDots) + "#" + ".".repeat(innerDots) + "#" + ".".repeat(outerDots));
    }

    console.log("#".repeat(outerDots + 1) + ".".repeat(innerDots) + "#".repeat(outerDots + 1));

    outerDots = 1;
    innerDots = 2 * n - 5;

    for (let i = 0; i < n - 2; i++) {
        console.log(".".repeat(outerDots) + "#" + ".".repeat(innerDots) + "#" + ".".repeat(outerDots));

        outerDots++;
        innerDots -= 2;
    }

    console.log(".".repeat(outerDots) + "#" + ".".repeat(outerDots));
}

drawArrow("5");