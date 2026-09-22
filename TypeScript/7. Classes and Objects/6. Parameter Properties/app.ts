// 1st way of creating a constructor

class User {
    // Declaring variables
    public name;
    public age;
    
    constructor(name: string, age: number) {
        // Intializing variables
        this.name = name;
        this.age = age;
    }
}

// 2nd way of creating a constructor: It is known as parameter property

class User2 { 
    // There is no need to Declare variables
    constructor(public name: string, public age: number) {
        // No need to intialize variable, you can directly use them

        console.log(name, age)
    }
}