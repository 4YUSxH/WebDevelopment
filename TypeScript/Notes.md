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

# 8. readonly: 
    By using readonly keyword that field is cannot be changed means it is readonly property 