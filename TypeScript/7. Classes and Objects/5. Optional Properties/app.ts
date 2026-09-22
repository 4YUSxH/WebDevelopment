class User {
    constructor(public name: string, public age: number, public gender?: string){
        
    }
}

let u1 = new User("Ayush", 21, "male")
let u2 = new User("Janvi", 22) // Gender is optional