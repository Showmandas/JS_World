//Write a JavaScript program to display the current day and time in the following forma

var d=new Date();

// console.log();
var day=d.getDay();

switch(day){
    case 0: console.log("Today is : Sunday");
    break;
    case 1: console.log("Today is : Monday");
    break;
    case 2: console.log("Today is : Tuesday");
    break;
    case 3: console.log("Today is : Wednesday");
    break;
    case 4: console.log("Today is : Thursday");
    break;
    case 5: console.log("Today is : Friday");
    break;
    case 6: console.log("Today is : Saturday");
    break;

    default:console.log("Invalid");
    break;
}


function crrtime(){

    var ctime=new Date();
    var h=ctime.getHours();
    var m=ctime.getMinutes();
    var s=ctime.getSeconds();
    
    
    var ampm=(h<=12)? "AM":"PM";
    var showtime=`${h} : ${m} : ${s} ${ampm}`;

    console.log("Current Time: " + showtime);
    setInterval(crrtime,1000);
}

crrtime();




