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
console.log(bubbleSortRecFun([34, 203, 3, 746, 200, 984, 198, 764, 9], 0));
