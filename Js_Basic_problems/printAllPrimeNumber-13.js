//take input
let lowerNum=parseInt("Enter lower number: ")
let upperNum=parseInt("Enter upper number: ")
// let lowerNum=2
// let upperNum=100
//loop from lower to upperlimit
for(let i=lowerNum;i<=upperNum;i++){
    let count=0

    //loop through 2 to user input
    for(let j=2;j<i;j++){
        if(i%j==0){
            count++
            break
        }
    }
    if(count==0){
        console.log(i);
    }
}

