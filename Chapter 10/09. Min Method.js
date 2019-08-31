function solve([a, b, c]) {
    function getMin(first, second) {
        if (first < second) {
            return first;
        }
        else{
            return second;
        }
    }

    const first = Number(a);
    const second = Number(b);
    const third = Number(c);

    let min = getMin(getMin(first, second), third);

    console.log(min);
}

solve([1, 2, 3]);