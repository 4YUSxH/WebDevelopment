// Type Assertion
let a: any = 14;
(a as string).includes // a is string
// Now i can access methods related to string

// (<string>a). // Another way

// Type Casting/Conversion
let b = Number("14")
console.log(typeof b)

// Non-Null Assertion Variable
// variable! // '!' by adding this we assure the datatype of this variable cannot be Null or Undefined 
let c: null | undefined | string
c = "hey"

c!.endsWith // c cannot be null or undefined it is guranteed hence you will find all the methods related to string