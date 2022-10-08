// let range = 2;
let predictedValue;
let actualValue;
let user;
let point = 0;

console.log("IF YOU ARE HERE WHILE PLAYING THE GAME THEN YOU ARE CHEATING!!!");

//================ PROCESSING FUNCTION ===============//
function process(range) {
    if ((!Number.isInteger(parseInt(predictedValue))) || ((predictedValue < 1) || (predictedValue > range))) {
        if(confirm(`\n${user}, Please input a valid number between 1 and ${range}`)){
            online(range);
        } else {
            user = "";
            range = 2; 
            point = 0;
        }
        
    } else if (actualValue != predictedValue) {
        alert(`\nGame over ${user}. The correct number is ${actualValue}\n\nYour total Point is ${point} ${(range > 3) ? "\n\nYou are indeed a genius for making it this far" : ""}`);
        user = "";
        range = 2;
        point = 0;
    } else {
        point++;
        alert(`\nCorrect!\n\nYou Scored ${point} Points`);
        range++;
        online(range);
    }
}

//================ ONLINE FUNCTION ===============//

function online(range = 2) {
    while(!user) {
        user = prompt("\nInput your username");
        if (user == null) {
            return;
        }
    }
    //range = num;
    actualValue = Math.ceil(Math.random() * range);
    console.log(`The correct number for STAGE ${range-1} is: ${actualValue}`);
    predictedValue = prompt(`\nHello ${user}\n\nYou are welcome to the STAGE ${range-1} of The Number Guessing Game\n\nYou have ${point} Point(s)\n\nI picked a random number between 1 and ${range}\n\nShow me how awesome you are by guessing that number.\n`);
    if(predictedValue != null) {
        process(range);
    } else {
        user = "";
        range = 2;
    }
}