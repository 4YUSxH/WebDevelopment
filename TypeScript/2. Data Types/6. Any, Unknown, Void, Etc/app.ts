// --------------> Any
let x1 = 1; // Number
// x1 = "ayush" // Throw error

let a2 = "hey"; // String
// a2 = 2 // Throw error

let a3; // Any
a3 = 1; // Doesn't throw error
a3 = "hello"; // Doesn't throw error

// Make sure TS program should not contain 'any' variable, Because the main reason of using TS is to contraint the data types

// TS failed to add its rule/checks on 'any' type
a3.toUpperCase(); // This will run for string but failed in number, GPTt this you'll get this

// --------------> Unknown
let a5: unknown;
a5 = 1;
a5 = "namaste";

// a5.toUpperCase() // This will throw error for both we have to specify the type if we want to perform this operaton

if (typeof a5 === "string") {
  // We have to specify the type and this thing is known as type narrowing
  a5.toUpperCase();
}

// TS rules/checks are workign on 'unkown' whereas TS wont work on 'any'
// any -> TS Off, unknown -> TS On

// --------------> Void
// When function doesnt have return statement use void
function abce(): void {
  console.log("hey");
}

function abce2(): string {
  return "hello";
}

function abce3(): number {
  return 10; 
}

function abce4(): boolean {
  return true; 
}

// --------------> Null

// --------------> Undefined

// --------------> Never
