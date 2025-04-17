
/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * More credits: Do you need to consider every element every time you iterate
 * through the array? Again: Has the time complexity of your algorithm changed?
*/
/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
 * Remember to look here http://visualgo.net/sorting
*/


import * as readline from 'readline';
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function bubbleSortRecFun(numbers:number[],count:number){
    if(count === numbers.length-1) return numbers;
        for(let j:number=0 ; j<numbers.length-1 ; j++){
            if(numbers[j]>numbers[j+1]){
                let x:number = numbers[j];
                numbers[j] = numbers[j+1];
                numbers[j+1] = x;
        }
     }
     return bubbleSortRecFun(numbers,++count);
}
const ask = async (r1:readline.Interface , question:string): Promise<string>=>{
    return new Promise((resolve)=>{
        r1.question(question,(answer)=>{
            resolve(answer);
        });
    });
}

async function main(){
 console.log('Bubble Sort :');
 let numbers :number[]=[];
 let numbersSize : number = parseInt(await ask(r1,'Please enter the size of array : '));
 for(let i=0 ; i<numbersSize ; i++){
    let item:number = parseInt(await ask(r1,'item : '));
    numbers.push(item);
 }
 r1.close();
 let sortedNumbersArr = bubbleSortRecFun(numbers,0);
 sortedNumbersArr.forEach(item=>{
    console.log(item);
 });
}
main();