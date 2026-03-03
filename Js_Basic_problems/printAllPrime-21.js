// Program to Print All Prime Numbers in an Interval

var lowerNum=parseInt(prompt("Enter lower number: "))
var higherNum=parseInt(prompt("Enter higher number: "))

//looping from lower to upper number
for(let i=lowerNum;i<higherNum;i++){
    let count=0

    // looping from 2 to user input
    for(let j=2;j<i;j++){
        if(i%j==0){
            count=1
            break
        }
    }

    // if number is greater than 1 and not divisible by other number
    if(i>1 && count==0){
        console.log(i);
    }
}