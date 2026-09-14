// Phase 1: Store & Service Fee Setup

const storeInfo = {
    name: prompt("Enter the restaurant name:"),
    taxRate: Number(prompt("Enter the tax rate (%):")),
    tableFee: Number(prompt("Enter the table/service fee:"))
};

console.log(`Welcome to ${storeInfo.name}!`);
console.log(`Standard table fee: $${storeInfo.tableFee.toFixed(2)}`);
