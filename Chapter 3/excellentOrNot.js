function excellentOrNot(n){
    var grade = Number(n);
    if(grade >= 5.50){
        console.log("Excellent!");
    }
    else{
        console.log("Not excellent.");
    }
}

excellentOrNot([6]);
excellentOrNot([5]);
excellentOrNot([5.50]);
excellentOrNot([5.49]);