//Program to Find the Largest Among Three Numbers

// let get_Num_1=parseInt(prompt("Enter First Number: "))
// let get_Num_2=parseInt(prompt("Enter Second Number: "))
// let get_Num_3=parseInt(prompt("Enter Third Number: "))

let get_Num_1=2
let get_Num_2=5
let get_Num_3=1

// if((get_Num_1>=get_Num_2) && (get_Num_1>=get_Num_3)){
//     console.log(get_Num_1+ " is largest")
// }

// else if((get_Num_2>=get_Num_1) && (get_Num_2>=get_Num_3)){
//     console.log(get_Num_2+ " is largest")
// }
// else{
//     console.log(get_Num_3+ " is largest")
// }

//using max function
let maxNum=Math.max(get_Num_1,get_Num_2,get_Num_3)
console.log(maxNum)