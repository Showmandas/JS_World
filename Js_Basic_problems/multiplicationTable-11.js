//Program to Display the Multiplication Table

let n=parseInt(prompt("Enter Number : "))
// let n=3;

console.log(`multiplication table of ${n}`);
for(let i=1;i<=10;i++){
    console.log(`${n} x ${i} = ${n*i}`)
}
console.log('\n')