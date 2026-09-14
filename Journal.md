Phase 1 Journal

Approach

I created a `storeInfo` object to keep the restaurant name, tax rate, and table fee together. I used `prompt()` to get the information from the user and `Number()` to convert the tax rate and table fee into numbers.

Journal Question

Grouping related data into an object makes the program easier to organize. Instead of having separate variables for the restaurant name, tax rate, and table fee, I can keep them together inside `storeInfo`. This makes the information easier to access and manage.

For example, I can use `storeInfo.name` to get the restaurant name and `storeInfo.tableFee` to get the table fee.

Challenges

One thing I had to remember was that `prompt()` gives the user input as text, so I used `Number()` for the values that need to be numbers.

-------------------------

Phase 2 Journal

Approach

I created an empty `receiptItems` array to store the food items ordered by the customer. I used a `while` loop to repeatedly ask the user if they wanted to add another item.

For each item, I created an object containing the item's name and price. I then used `.push()` to add the object to the `receiptItems` array.

Journal Question

If I set a value to a property that did not exist before, JavaScript creates that property on the object. This means I can create an object with some properties and add new properties later if needed.

For example:

```javascript
const item = {};
item.name = "Burger";
item.price = 10.50;
```

This makes objects flexible because I do not have to define every property when the object is first created.

Challenges

The main thing I had to remember was that `prompt()` returns text, so I used `Number()` to convert the item price into a number before storing it.

-------------------------

Phase 3 Journal

Approach

I used a `for...of` loop to go through each item in the `receiptItems` array. I created a `subtotal` variable starting at zero and added each item's price to it.

Inside the loop, I used `item.name` to get the item's name and `item.price` to get its price.

Journal Question

The `for...of` loop gives me each item object from the array one at a time. I can use `item.price` to access just the price property of that object.

For example:

```javascript
for (const item of receiptItems) {
    subtotal += item.price;
}
```

This makes it easy to calculate the total without having to manually access each item in the array.

Challenges

The main thing I had to understand was that `item` represents the current object in the array. I can then use dot notation, such as `item.price`, to access its properties.
