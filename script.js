const PHONE_PRICE = 80;
const ACCESSORY_PRICE = 20;
const TAX_RATE = 0.08;

var bankBalance = prompt("Please insert your current bank account balance:");
const mySpendingThreshold = prompt("What is your spending threshold?");
var amount = 0;

/* for calculating the amount with the tax rate */

function calculatePriceWithTax() {

    amount = amount + TAX_RATE * amount;

}

/* for formatting the price with a "$" and rounding to two decimal places */

function formatAmount(){

    return "$" + amount.toFixed(2);
}

/* to keep on buying until MY_THRESHOLD and bankBalance is exceeded */

while (amount<mySpendingThreshold){

    amount = amount + PHONE_PRICE;
    amount = amount + ACCESSORY_PRICE;

}

calculatePriceWithTax(amount);

console.log("The total cost is: " + formatAmount(amount));

/*To check if you can afford the purchase*/

if (amount > bankBalance){
    console.log("You cannot afford this purchase");
}


