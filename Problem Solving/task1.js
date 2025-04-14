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
