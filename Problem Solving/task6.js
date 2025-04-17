"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function bubbleSortRecFun(numbers, count) {
    if (count === numbers.length - 1)
        return numbers;
    for (var j = 0; j < numbers.length - 1; j++) {
        if (numbers[j] > numbers[j + 1]) {
            var x = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = x;
        }
    }
    return bubbleSortRecFun(numbers, ++count);
}
var ask = function (r1, question) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve) {
                r1.question(question, function (answer) {
                    resolve(answer);
                });
            })];
    });
}); };
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var numbers, numbersSize, _a, i, item, _b, sortedNumbersArr;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    console.log('Bubble Sort :');
                    numbers = [];
                    _a = parseInt;
                    return [4 /*yield*/, ask(r1, 'Please enter the size of array : ')];
                case 1:
                    numbersSize = _a.apply(void 0, [_c.sent()]);
                    i = 0;
                    _c.label = 2;
                case 2:
                    if (!(i < numbersSize)) return [3 /*break*/, 5];
                    _b = parseInt;
                    return [4 /*yield*/, ask(r1, 'item : ')];
                case 3:
                    item = _b.apply(void 0, [_c.sent()]);
                    numbers.push(item);
                    _c.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 2];
                case 5:
                    r1.close();
                    sortedNumbersArr = bubbleSortRecFun(numbers, 0);
                    sortedNumbersArr.forEach(function (item) {
                        console.log(item);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
main();
