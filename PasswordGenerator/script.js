const lowerLetters="abcdefghijklmnopqrstuvwxyz"
const upperLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers="0123456789"
const symbols="!@#$%^&*(){}[]//,\"'./<>:?+=-_"

const len=document.getElementById("length")
const lower=document.getElementById("lowercase")
const upper=document.getElementById("uppercase")
const number=document.getElementById("numbers")
const symbol=document.getElementById("symbols")
const generate=document.getElementById("generate")
const password=document.getElementById("password")

generate.addEventListener("click",function(){

    const length=len.value
    let chars=""
    let pass=""
    if (lower.checked){
        chars+=lowerLetters
    }
    if (upper.checked){
        chars+=upperLetters
    }
    if (number.checked){
        chars+=numbers
    }
    if (symbol.checked){
        chars+=symbols
    }

    for(let i=0;i<length;i++){
        pass += chars.charAt(Math.floor(Math.random()*chars.length))
    }

    password.value=pass

})