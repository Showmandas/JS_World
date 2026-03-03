
// code for calculating maturity amount

calculateMaturity=()=>{

    //get inputs
    const main=parseFloat(document.getElementById('main').value);
    const interest=parseFloat(document.getElementById('interest').value);
    const tenure=parseFloat(document.getElementById('tenure').value);

    // calculate the maturity amount
    const maturity= main + (main * interest * tenure)/100;

    // display the result
    document.getElementById('result').innerText=`Matuarity Amount : ${maturity.toFixed(2)} /-`;
}

//Event listener to the calculate button

document.getElementById('calbtn').addEventListener('click',calculateMaturity);