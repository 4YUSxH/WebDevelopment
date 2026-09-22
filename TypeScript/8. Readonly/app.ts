class User {
    constructor(public readonly name: string){
        console.log(name)
    }

    // name cannot be changed cause it is readonly field
    changeName() {
        // this.name = "Hi"
    }
}

let u1 = new User("Ayush")
u1.changeName()