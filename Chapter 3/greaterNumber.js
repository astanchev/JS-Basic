function greaterNumber([arg1, arg2]){
    var num1 = Number(arg1);
    var num2 = Number(arg2);
    if(num1 > num2){
        console.log(num1);
    }
    else{
        console.log(num2);
    }
}

greaterNumber([5,3]);
greaterNumber([3,5]);
greaterNumber([10,10]);
greaterNumber([-5,5]);