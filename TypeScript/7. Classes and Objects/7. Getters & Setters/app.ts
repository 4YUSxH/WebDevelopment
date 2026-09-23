// Getter and Setter

class User {
  constructor(public name: string) {
    console.log(name);
  }

  // Getter
  getName() {
    return this.name;
  }

  // Setter
  setName(value: string) {
    this.name = value;
  }
}

let u1 = new User("Ayush")

u1.getName()
u1.setName("Other name")

// In modern ts code: We will use a set and get keyword

class User1 {
    constructor(public _name: string){
        console.log(_name)
    }

    get name(){
        return this._name
    }

    set name(value: string){
        this._name = value
    }
}

const user1 = new User1("Gekko")

console.log(user1.name) // No need to call method
user1.name = "Change this name" // No need to call method

// _ is just naming convention and it means this field is going to be get and set