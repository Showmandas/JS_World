//Program to Check Prime Number

let num=parseInt(prompt("Enter positive number: "))
count=0;

    //loop through 2 to user input
for(let i=2;i<num;i++){
    if(num % i == 0){
        count++
        break
    }
}
if(count==0){
    console.log("It's prime number");
}
else{
    console.log("It's not prime");
}