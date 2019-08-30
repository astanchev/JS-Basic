function drawChristmassHat(input) {
    let n = Number(input);

    console.log(".".repeat(2 * n - 1) + "/|\\" + ".".repeat(2 * n - 1));
    console.log(".".repeat(2 * n - 1) + "\\|/" + ".".repeat(2 * n - 1));


    for (let j = 2 * n; j >= 1; j--) {
        console.log('.'.repeat(j - 1) + "*" + '-'.repeat(2 * n - j) + "*" + '-'.repeat(2 * n - j) + "*" + '.'.repeat(j - 1));
    }

    console.log('*'.repeat(4 * n + 1));

    console.log('*.'.repeat(n) + "*" + '.*'.repeat(n));

    console.log('*'.repeat(4 * n + 1));
}

drawChristmassHat(2);