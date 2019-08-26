function radiansToDegrees([arg1]) {
    let radians = Number(arg1);
    let degrees = radians * 180 / Math.PI;
    console.log(Math.round(degrees));
}

radiansToDegrees([3.1416]);