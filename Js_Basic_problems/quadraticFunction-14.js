//Solve Quadratic Equation
//ax^2+bx+c=0
let a=1;
let b=6;
let c=5;
let r1,r2;
let discr=(b*b)-4*a*c;
if(discr>0){
    r1=(-b + Math.sqrt((discr)) / (2*a))
    r2=(-b - Math.sqrt((discr)) / (2*a))
    console.log(`The roots are ${r1} and ${r2}`)
    console.log("The roots are  real and different");
}
else if(discr==0){
    r1=r2=-b/(2*a)
    console.log(`The roots are ${r1},${r2}`)
    console.log("The roots are real and equal");
}
else if(discr<0){
    console.log("The roots are complex and different");
}