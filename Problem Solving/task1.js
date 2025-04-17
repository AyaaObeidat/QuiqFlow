/*
In this problem set we will review closures. Before you freak out, remember that closure is
just a function that returns another function.
Problem 1:
Write a function that accepts an exponent and returns back a function that accepts
a number and takes it to the power of the exponent.
Example:
var square = pow(2);
var cube = pow(3);
square(3); // should return 9
cube(3);   // should return 27
*/
const powFunction = exponentNumber => {
    return function(number) {
        return number ** exponentNumber;
    };
};

const main = () => {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter exponent number: ', (expInput) => {
        const exponent = parseInt(expInput);
        const myFun = powFunction(exponent);

        rl.question('Enter any number: ', (numInput) => {
            const number = parseInt(numInput);
            console.log(`Result: ${myFun(number)}`);
            rl.close();
        });
    });
};

main();
