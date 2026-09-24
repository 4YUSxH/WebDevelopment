# 1. TS Setup: 
    Setting up a TS project: Create app.ts
    Configuring tsconfig.json: tsc --init
    Compiling TS: "tsc", "tsc app.ts" or "tsc --watch"(This will automatically compile the code after any change happened)

1. 
var a = 2;
a = "ayush"; //   create a JS file
JS valid code is also valid for TS, TS will show erros/warnings but at the end it will compile the code and create js file

2. We need npm, node, tsc for using TS

3. Configuring tsconfig.json: We define rules in this file
run "tsc --init" creating this file

# 2. Primitive Vs Reference Data Types: 

1. You can directly copy prmitive data types
a = 1;
b = a; 

If you make any changes in "b" it wont affect a

2. You can't directly copy prmitive data types
a = [1, 2, 3, 4]
b = a
b.push(5)

a = [1, 2, 3, 4, 5]
b = [1, 2, 3, 4, 5]
Changes in Child will affect Parent

# 2. Basic Types:
    Number, String, Boolean
    Arrays
    Tuples
    Enums
    Any, Unkown, Void, Null, Undefined, Never

# 3. Type Inference:
    TS automatically decide the type of the variable using value
    let a1 = 1 // number

# 3. Type Annotations:
    We specify the type of the variable
    let c1: number

# 4. Interfaces: 
    Create by using 'interface' keywords it tells TS which field a object will contain

# 5. Type Aliases: 
    Giving custome name to types
    type value = number | boolean | string | null;
    let a: value;

# 6. Union Types:
    let a: number | null; // 'a' can be a number OR null
    This '|' is called union 

# 6. Intersection Types:
    See code

# 7. Classes and Objects: 

1. Class: It is a blueprint or template for creating objects

2. Constructor: While creating objects using Class blueprint we have to pass different data for each object for this we use constructors

3. this: 'this' keyword is used to accsess that data created outside the constructor

4. Access Modifiers: 
    a. Public: Can access the data anywhere
    b. Private: Only in same class
    c. Protected: Can be accessible in same class and Child class

5. Optional Properties: 
    constructor (public gender?: string)
    Gender is optional while creating an object

6. Parameter Properties: 
    It is a different way of creating a constructor, there is no need to declare and initiliaze the parameteres variables 

7. Getters and Setters: 
    In modern days it is irrelevent but for legacy codebase you can find these

    Getter is a method inside a class that read the values
    Setter is a method inside a class that write the values

8. Static Members: 
    We doesn't have to create an object for accessing class fields 

9. Abstract Classes: 
    Human -> Abtract Concept
    Ayush -> Implementation of concept

    Tree -> Abtract Concept
    Mongo Tree -> Implementation of concept

    An abstract class is basically a class that is meant to be inherited, not directly used.

# 8. readonly: 
    By using readonly keyword that field is cannot be changed means it is readonly property 

# 9. Functions: 
    Functions contain the code and it wll only execute when you want to be execute

1. Function Types:
    Providing type to callback in paramters
    function abcd(name: string, cb: () => void)

2. Optional Parameters In Fuctions: 
    function abcd(name: string, age: number, gender?: string)
    // Passing gender when calling a function is optional

3. Default Parameters In Fuctions: 
    function abcd(name: string, age: number, gender: string = "no gender")

4. Rest Parameter: 
    function abcd(...arr: number[])

    abcd(1, 2, 3, 4, 5, 6, 7, 8, 9)
    // All the arguments will passed to arr parameter array, no need to create multiple parameter variables

5. Function Overloading: 
    Two or more functions with same name but with different parameters

    function abcd(a: string): void;
    function abcd(a: string, b: number): number;

# 10. Generics: 
    Hum ek function ko use karte waqt bata sakte hai ki funciton arguement ko kis type se treat kare


    function abcd(a: "Will tell the tyep whlie calling it")

# 11. Type Assertion: 
    Type assertion ka matlab batana ts ko ki particular variable ka type kya hai, ye ap tab karte ho jab ap ts se jyada uss variable ka type jaante ho

# 12. Type Narrowing: 
    Performing checks(if-else) to confirm the datatype of data
    
    if(typeof a === "string")