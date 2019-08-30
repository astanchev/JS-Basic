function passionDays(input) {
    let money = Number(input.shift());
    let command = input.shift();

    let purchases = 0;
    let price = 0.0;

    while (command !== "mall.Enter") {
        command = input.shift();
    }

    command = input.shift();

    while (command !== "mall.Exit") {
        for(let i = 0; i < command.length; i++) {

            let action = command.charCodeAt(i);

            if (action >= 'A'.charCodeAt(0) && action <= 'Z'.charCodeAt(0)) {
                price = 0.5 * action;                
            } 
            else if (action >= 'a'.charCodeAt(0) && action <= 'z'.charCodeAt(0)) {
                price = 0.3 * action;
            } 
            else if (action === '%'.charCodeAt(0)) {
                price = money * 0.5;
            } 
            else if (action === '*'.charCodeAt(0)) {
                money += 10.0;
                continue;
            } 
            else {
                price = action;
            }

            if (price > money || money === 0) {
                continue;
            }

            money -= price;
            purchases++;
        }

        command = input.shift();
    }

    if (purchases === 0) {
        console.log(`No purchases. Money left: ${money.toFixed(2)} lv.`);
    } else {
        console.log(`${purchases} purchases. Money left: ${money.toFixed(2)} lv.`);
    }
}

passionDays(["110", "mall.Enter", "d", "mall.Exit"]);
console.log();
passionDays(["110", "mall.Enter", "%", "mall.Exit"]);
console.log();
passionDays(["100", "mall.Enter", "Ab", "**", "mall.Exit"]);
console.log();

let data = ['mall.Enter',
'%%%%%%%%%%JHZJHJZKLZ',
'!@#$%^&())%%%%%%%%%%',
'(&^%$#@!%%%%%%%%%%%%',
')(&^%$#@#$%^&(******',
'<><<><><><><>[][][][',
'ABCDEFGHIJKLMNO}}}}}',
'PQRSTUVWXYZ{{{{{{{{{',
'abcdefghijkl()()()()',
'mnopqrstuvwjdkajsfdk',
'xyz1234567890DAJSHJA',
'1234567890ASLKDJAKJD',
'ABCDEFGHIJKLMNOUDSAD',
'PQRSTUVWXYZ987987988',
'abcdefghijkl12345676',
'mnopqrstuvw  HJHJDSD',
'xyz1234567890&*&^%^$',
'1234567890hdkjashkdd',
'hjk;jhdajksdhsakldla',
'mall.Exit',
'%%%%'];

// JS Limit. This will not work 
passionDays(["79228162514264337593543950335", data]); // 353 purchases. Money left: 576460752303416096.37 lv