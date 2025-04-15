const recursionNumberFun = number => {
    console.log(number);

    if(number <= 1) return 1;
    else if(number%2 === 0) number = number/2;
    else number = number*3+1;

   return recursionNumberFun(number);

}

const main = () =>{
recursionNumberFun(13);
console.log("----------------------");
recursionNumberFun(7);
}

main();