// hume seekhna hai factories i.e class banana, matlab ki aap ek baar blueprint bana do ki  har object kaise dikhega and hum log naye naye objects i.e instances with different values bana payenge, yahi hai upar upar se poora kaam hai OOPS mai  

// Constructor function - function is blueprint and creating blank object using new keyword is instances
function CreatePencil(company, price, color) {
    this.company = company;
    this.price = price;
    this.color = color;
}

let pencil1 = new CreatePencil("Doms", 5, "Pink");
let pencil2 = new CreatePencil("Apsara", 10, "Neon");

// new -> blank object
// this -> that blank object
// CreatePencil(Constructor) - assign values to blank object

// Note - funciton ke andar this ki value window hoti hai par jab new keyword use hota hai to this ki value blank object hoti hai 
// Note- constructor function ka first letter hamesha capital hona chiaye(good programming practice)

// Prototype - memory save karta hai, it is shared to all instances
CreatePencil.prototype.manufracturedin = "India";               