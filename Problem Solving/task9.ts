 /*
 * Given a single input string, write a function that outputs an array of strings with every possible
 * combination of letters.
 *
 * At first, don't worry about repeated (duplicate) strings.
 *
 * What time complexity is your solution?
 *
 * Extra credit: De-duplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
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

function allAnagrams(str: string): string[] {
    const result: string[] = [];
    const arr = str.split('');
    const n = arr.length;
  
    const generate = (n: number, arr: string[]) => {
      if (n === 1) {
        result.push(arr.join(''));
        return;
      }
  
      for (let i = 0; i < n; i++) {
        generate(n - 1, arr);
  
        if (n % 2 === 0) {
          [arr[i], arr[n - 1]] = [arr[n - 1], arr[i]]; // swap
        } else {
          [arr[0], arr[n - 1]] = [arr[n - 1], arr[0]]; // swap
        }
      }
    };
  
    generate(n, arr);
    return result;
  }
  
  async function main(){
    console.log('All Anagrams :');
    let str : string = await ask(r1,'Please enter the string : ');
    r1.close();;
    console.log(allAnagrams(str));
   }
   main();
  
  
  