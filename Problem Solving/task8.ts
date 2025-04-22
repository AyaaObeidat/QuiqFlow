/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *	"())"
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

const balancedParensRecFun = (str: string, index = 0, stack: string[] = []): boolean => {
    const matched: Record<string, string> = {
      ')': '(',
      ']': '[',
      '}': '{',
    };
  
    if (index === str.length) {
      return stack.length === 0; 
    }
  
    const char = str[index];
  
    if (['(', '[', '{'].includes(char)) {
      stack.push(char); 
    } else if ([')', ']', '}'].includes(char)) {
      const last = stack.pop();
      if (last !== matched[char]) {
        return false; 
      }
    }
    return balancedParensRecFun(str, index + 1, stack);
  };

  async function main(){
    console.log('Stack :');
    let str : string = await ask(r1,'Please enter the text : ');
    r1.close();
    let stack : string[] = [];
    console.log(balancedParensRecFun(str,0,stack));
   }
   main();
  