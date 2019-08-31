function solve([length, heigth]) {
    function getTriangleArea(a, b) {
        return (a * b) / 2;
    }

    const a = Number(length);
    const b = Number(heigth);

    const area = getTriangleArea(a, b);

    console.log(area);
}

solve([3, 4]);