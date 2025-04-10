const prompt = require('prompt-sync')();

function getDate(){
    let today = new Date();
    console.log('Date : ' +today.toLocaleDateString('en-GB'));  
}
function printMotivationalQuote(userName){
    let motivationalQuote = [
        "You are capable of amazing things!",
        "Keep going, you're doing great!",
        "Believe in yourself and all that you are.",
        "Don't watch the clock; do what it does. Keep going.",
        "Success is the sum of small efforts, repeated day-in and day-out.",
        "Doubt kills more dreams than failure ever will.",
        "Your only limit is your mind.",
        "Every day is a fresh start.",
        "Push yourself, because no one else is going to do it for you.",
        "Don’t be afraid to fail. Be afraid not to try."
    ];

    let randomIndex = Math.floor(Math.random() * motivationalQuote.length);
    console.log(`${userName} , ${motivationalQuote[randomIndex]}`);
}



function main(){
    console.log(`\nWelcome! We're glad to have you here \n`);
    let userName = prompt('what is your name ? ');
    if(userName !== null || userName!== "")
    {
        console.log(`Hello ${userName} , here’s a list of options our program provides:\n1 - Print today's date\n2 - Print a motivational quote\n3 - Exit\n`);
        let userChoice = parseInt(prompt('Please enter 1, 2, or 3: ')); 
        switch (userChoice){
            case 1 : getDate();break;
            case 2 : printMotivationalQuote(userName);break;
            case 3 : console.log('Wishing you well, have a great day!');break;
            default : console.log('Invalid choice.Try again and enter 1, 2, or 3.');
        }
    }
   else{
    console.log('Oops! Please enter your name correctly and try again.');
}
 }

main();
   
 
