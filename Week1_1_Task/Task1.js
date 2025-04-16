const prompt = require('prompt-sync')();

let fastFoods = [
  { name: 'Pizza', price: 2.30 },
  { name: 'Chicken Burger', price: 1.30 },
  { name: 'Meat Burger', price: 3.30 },
  { name: 'Steak Meat', price: 7.00 },
  { name: 'Chicken Steak', price: 4.30 },
  { name: 'Shorma', price: 2.00 },
  { name: 'Prosted', price: 5.30 }
];

let totalAmount = 0;
let customerOrder = [];

console.log('Fast Food Restaurant');
console.log('Restaurant Menu:\nAll food => one size\n');

fastFoods.forEach((item)=>{
    console.log(`${item.name} - ${item.price.toFixed(2)} JD`);
});

let customerAnswer;
do {
  customerAnswer = prompt('Would you like to order something from our menu? (Yes/No): ').toLowerCase();

  if (customerAnswer === 'yes') {
    let customerChoice = prompt('Please select the item you would like to order: ');

    let selectedItem = fastFoods.find(item => item.name.toLowerCase() === customerChoice.toLowerCase());

    if (selectedItem) {
      customerOrder.push(selectedItem);
      totalAmount += selectedItem.price;
      console.log(`${selectedItem.name} added to your order.\n`);
    } else {
      console.log('Item not found. Please check the name and try again.\n');
    }
  }

} while (customerAnswer !== 'no');

console.log('\n Your Order Summary:');
customerOrder.forEach((item, index) => {
  console.log(`${index + 1}. ${item.name} - ${item.price.toFixed(2)} JD`);
});
console.log(`\nTotal Amount: ${totalAmount.toFixed(2)} JD`);
