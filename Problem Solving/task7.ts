/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 */
import * as readline from 'readline';
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
const ask = async (r1:readline.Interface , question:string): Promise<string>=>{
    return new Promise((resolve)=>{
        r1.question(question,(answer)=>{
            resolve(answer);
        });
    });
}

function binarySearchRecFun(numbers:number[],num:number,left:number,right:number){
    if(left > right) return -1;
    else{
        let mid : number = Math.floor((left+right)/2);
        if(numbers[mid] === num) return mid;
        else if(numbers[mid] < num) right = mid -1 ;
        else left = mid+1;
        return binarySearchRecFun(numbers,num,left,right);
    }
}

async function main(){
    console.log('Binary Search :');
    let numbers :number[]=[];
    let numbersSize : number = parseInt(await ask(r1,'Please enter the size of array : '));
    for(let i=0 ; i<numbersSize ; i++){
       let item:number = parseInt(await ask(r1,'item : '));
       numbers.push(item);
    }
    let number : number = parseInt(await ask(r1,'Please enter the number you want to search : '));
    r1.close();

    console.log(`Number : ${number} => Index : ${binarySearchRecFun(numbers,number,0,numbersSize-1)}`);
   }
   main();