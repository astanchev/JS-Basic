function calculateDistance(input) {
    let speed = Number(input.shift());
    let firstTime = Number(input.shift())/60;
    let secondTime = Number(input.shift())/60;
    let thirdTime = Number(input.shift())/60;

    let distance = firstTime*speed + secondTime*speed*1.1 + thirdTime*speed*1.1*0.95;

    console.log(distance.toFixed(2));
}

calculateDistance([90, 60, 70, 80]);