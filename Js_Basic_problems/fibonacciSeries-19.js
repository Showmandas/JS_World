// Program to Print the Fibonacci Sequence

let n=5
let f1=0,f2=1,f;

for(let i=1;i<=n;i++){
    // console.log(f1)
    f=f1+f2
    f1=f2
    f2=f
    console.log(f)
}
