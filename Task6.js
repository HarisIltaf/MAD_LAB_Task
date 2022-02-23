// Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "You WIN" otherwise display a message "Not matched".


let found=false;
let userInput=2;
while(!found){
    let random = parseInt(Math.random()*10);
    console.log(random);
    if(+userInput===random){
        console.log("You WIN");
    }
    found=true;
}