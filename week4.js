const life = 0;

if(life === 100){
    console.log("Full Life");
} else if(life < 1){
    console.log("GAME OVER")
} else {
    console.log("Watch your life");
} //IF Statement

let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
} //SWITCH
console.log(day.toUpperCase()); //STRING Method

const name = "Mario";
const level = 50;

console.log(`It's me ${name} Level ${level}`); //STRING concatenation

let x = 96.6666666666

console.log(x.toFixed(0)); //NUMBER Method

