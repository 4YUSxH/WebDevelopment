// Claases: same as constructor function, it is a feature of ES6 js

// Constructor and Methods
class CreatePencil{
    constructor(name, price, color){ // sabse pahele ye chalega jab new object create hoga
        this.name = name;
        this.price = price;
        this.color = color;
        this.role = "user";
    }   

    // Methods
    write(text){
       let h1 = document.createElement("h1");
       h1.textContent = text;
       h1.style.color = this.color;
       document.body.appendChild(h1);
    }
}

let p1 = new CreatePencil("natraj", 10, "red");
let p2 = new CreatePencil("doms", 5, "blue");

// Extend and Super
class User{
    constructor(name, address, username, email){
        this.name = name;
        this.address = address;
        this.username = username;
        this.email = email;
    }

    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = `${this.name} : ${text}`;
        document.body.appendChild(h1);
    }
}

//Classical Inheritance 
class Admin extends User{
    constructor(name, address, username, email){
        super(name, address, username, email);
        this.role = "admin";
    }

    checkrole(){
        return `You are a ${this.role}`;
    }

    remove(){
        document.querySelectorAll("h1").forEach(function (elem) {
            elem.remove();
        });
    }
}
// Admin class contain all the properties of User class and also have its individual properties

let u1 = new User("Ayush", "indore", "async123", "hi@gmail.com");
let u2 = new User("Ayushiii", "Delhi", "sync123", "hola@gmail.com");

let admin = new Admin("Deepak", "Pune", "SDE", "deepak@gmail.com");

