// Sessionstorage = ye aapka data temporarily store karta hai matlab ki TAB band hua aur data gaya.(5 MB)

// store kese kare = .setItem
// data fetch kese kare = .getitem
// remove kese kare = .removeItem
// update kese kare = .setItem it also perform updation

sessionStorage.setItem("name", "ayush");

let a = sessionStorage.getItem("name");
console.log(a);

sessionStorage.removeItem("name");

sessionStorage.setItem("name", "emilia"); 

sessionStorage.clear();    // Clears all key-value pairs in sessionStorage
