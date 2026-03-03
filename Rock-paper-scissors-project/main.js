
let result=document.getElementById('showResult');
let choice_obj={
    'rock':{
        'rock':'draw',
        'scissor':'win',
        'paper':'lose'
    },
    'paper':{
        'rock':'win',
        'scissor':'lose',
        'paper':'draw'
    },
    'scissor':{
        'rock':'lose',
        'scissor':'draw',
        'paper':'win'
    },
    
}

let comp_score=0;
let user_score=0;

const check=(inputCheck)=>{
    var opt=['rock','paper','scissor'];
    var number=Math.floor(Math.random() * 3)

    document.getElementById('comp_choice').innerHTML=`Computer Choose <span>${opt[number].toUpperCase()}</span>`;
    document.getElementById('user_choice').innerHTML=`User Choose <span>${inputCheck.toUpperCase()}</span>`;



let computer_choices=opt[number];

switch(choice_obj[inputCheck][computer_choices]){
    case 'win':
        result.style.cssText="background-color:#cefdce;color:#689f38;width:30%;margin:0 auto";
        result.innerHTML='You win';
        user_score++;
        break;
       
        case 'lose':
            result.style.cssText="background-color:#ffdde0;color:#d32f2f;width:30%;margin:0 auto";
            result.innerHTML='You lose';
            comp_score++;
            break;
            
        default:
            result.style.cssText="background-color:#e5e5e5;color:#888888;width:30%;margin:0 auto";
            result.innerHTML='Draw';
            break;
    }
    document.getElementById('computer_score').innerHTML=comp_score;
    document.getElementById('user_score').innerHTML=user_score;
}