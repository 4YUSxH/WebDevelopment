// Intro to Rrror Handling :
// Error - kisi bhi type ki problem in code, and jis line par error aaya uske baad ki lines nahi chalegi and ye problem hai and isse handel karna imp hai

// Common types of error in javascript :
//  1. Syntax Error - Code mai likhte wakt galti kardi
//                      leat a = 10;
//                      a let b = 8;
//  1. Runtime Error - As name suggest
//                      function abcd(){
//                          let a = 10;
//                          console.log(a.name.lastname);
//                      };
//                      abcd();
//  1. Logical Error - Pura code correct hoga par logic galat likha hoga ex a-b ko jagah a+b, yaha substraction karna tha par logic wrong hone ki wajah se error aa gayi ye error jesi show nahi hogi khud hi identify karna padega

// Try-Catch : Error Handler
try {
  console.log(a.name.lastname); // Error to hai par show nahi hoga cause handel kar liya error ko and ye error err mai aa jayega catch block mai, it is exception handeling
} catch (err) {
  // console.error(err);
  console.log(err.message); // Error Message
  console.log(err.name); // Type of Error
  console.log(err.stack); // Stack -> Kon si line mai error hai
}
// Code mai error hone ke baad bhi aage ki lines run ho jayegi
console.log("Hye hey");

// Try-Catch-Finally : 
try{
    let b = 10;
    console.log(b); // Errorless code
    // console.log(b.poiny.lol); // With error
}
catch(err){
    // Jab try ka code chal jayega(i.e Errorless) to catch nahi chalega aur jab nahi chlata hai(i.e Error aa gayi) to catch chalta hai 
    console.error(err);
}
finally{
    // Chahe try chale ya catch chale ye dini dono cases mai chalata hai 
    console.log("Always run hoga");
    // Chahe apke code mai koi error ho ya nahi ho fir bhi ye finally to chalega hi chalega 
}

// How to throw errors in js : Used to show custom error
try{
    let d = 14;
    console.log(d.name.out);
}
catch(err){
    throw new Error("Somthing went wrong from our side, Please wait...");
    // or
    // console.error(new Error("Somthing went wrong from our side, Please wait..."));
}