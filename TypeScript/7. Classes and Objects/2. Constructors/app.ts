// --------------> 1st Way

class BottleMaker {
  public brand: string;
  public price: number;
  public material: string;

  constructor(brandReceived: string,
    priceReceived: number,
    materialReceived: string,) {
    this.brand = brandReceived;
    this.price = priceReceived;
    this.material = materialReceived;
  }
}

let b1 = new BottleMaker("milton", 1000, "metal");
let b2 = new BottleMaker("cello", 800, "glass");

console.log(b1);
console.log(b2);

// --------------> 2nd Way(Shorthand of 1st way)

class HumanMaker {
  age = 0; // Default
  constructor(
    public name: string,
    public isHandsome: boolean,
  ) {
    // This method will directly set the data to variables, no need to use 'this' keyword
  }
}

let h1 = new HumanMaker("solo", true);
let h2 = new HumanMaker("stunner", true);

console.log(h1);
console.log(h2);
