// Phase 1: Store & Service Fee Setup

const storeInfo = {
    name: prompt("Enter the restaurant name:"),
    taxRate: Number(prompt("Enter the tax rate (%):")),
    tableFee: Number(prompt("Enter the table/service fee:"))
};

console.log(`Welcome to ${storeInfo.name}!`);
console.log(`Standard table fee: $${storeInfo.tableFee.toFixed(2)}`);


// Phase 2: Interactive Item Collection

const receiptItems = [];

let addItem = "Y";

while (addItem.toUpperCase() === "Y") {
    const itemName = prompt("Enter the item name:");
    const itemPrice = Number(prompt("Enter the item price:"));

    const item = {
        name: itemName,
        price: itemPrice
    };

    receiptItems.push(item);

    addItem = prompt("Do you want to enter another item? (Y to continue)");
}

console.log(`Total items added: ${receiptItems.length}`);
console.log(receiptItems);


// Phase 3: Process the Order

let subtotal = 0;

for (const item of receiptItems) {
    console.log(`${item.name} -- $${item.price.toFixed(2)}`);
    subtotal += item.price;
}

console.log(`Food subtotal: $${subtotal.toFixed(2)}`);
