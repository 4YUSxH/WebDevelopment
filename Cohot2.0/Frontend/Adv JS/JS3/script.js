// CLASS EXPRESSION *************************
// Same as class but class ko ek variable mai store kar dete hai, generally use nahi hota ye.
// let a1 = new Animal(); Hoisting is not possible.
let Animal = class{
  constructor(){
    this.name = "Dodo";
    this.breed = "Bird";
  }
};
let a1 = new Animal();
console.log(a1);
// Imp : Class expression mai hoisting nahi hoti hai cause let as a variable treat hota hai aur let mai hoisting work nahi karti.
// Normal class keyword se bani hui class hoist hoti hai.

// INHERITANCE *************************
// Agar koi class hai jismai kuch kuch likha hai and aap maante ho ki ek nayi class usi class ka extension hai to aap wo saare features puraani class  se borrow kar sakte ho and nayi class mai usse kar sakte ho and apne naye features bhi bana sakte ho.
class Marker{ // Base Class
  constructor(){
    this,length = 2;
    this.duration = 50;
  }

  // Common Features
  write(){};
  erase(){};
}

class BlueMarker extends Marker{ // BlueMarker extends kar raha hai Marker ko  
  constructor(){
    super();
    this.color = "Blue";
  }
  
  refill(){
    console.log("Refill Blue Ink");
  }
}
let b1 = BlueMarker();
console.log(b1);
// Iss class ke prototype mai khud ka prototype to rahega hi aur sath hi sath Marker ka prototype bhi rahega.

// GETTER & SETTER *************************
// Mainly private variables banane mai use hota hai.
class User{
  constructor(){
    this._name = "Aayu"; // _name(Underscore lagana Imp) private variable ki tarah treat hoga by fellow developers par ye private variable nahi hai.
  }

  set name(str){  // set required parameters
    if(str.length() <= 0){
      console.error("Name length cannot be 0");
      return;
    }
    else{
      this._name = str;
      return this._name;
    }
  }
  get name(){
    return this._name;
  }
}
let u1 = new User();
// u1._name = "Solo"; Value change ho jayegi aur ye problem hai issi ke liye getter & setter hai
u1.name = "Solo"; // name set ki wajah se likh paa rahe hai, aesa karna hai directly _name ko access nahi kar sakte hence _name private rahega. name ko set kar diya and indirectly _name set ho jayga. 
console.log(u1.name);