// localstorage = aapke broswer ke andar data store karna jo ki browser ke band hone par bhi delete nahi hoga.(5 to 10 MB)

// Localstorage can only store srings hence we can not parse array, object, etc for parsing these type of data we use JSON.stringify to first convert data into string and then we use JSON.parse() to covert it data into its orignal form. 

// store kese kare = .setItem
// data fetch kese kare = .getitem
// remove kese kare = .removeItem
// update kese kare = .setItem it also perform updation

localStorage.setItem("name", "ayush");

let a = localStorage.getItem("name");
console.log(a);

localStorage.removeItem("name");

localStorage.setItem("name", "emilia");

localStorage.clear();      // Clears all key-value pairs in localStorage

