// This OOPs 'this' keyword is used to access the data outside the variable

class BottleMaker {
  public brand: string;
  public price: number;
  public material: string;

  constructor(
    brandReceived: string,
    priceReceived: number,
    materialReceived: string,
  ) {
    // 'this' will point out the data that we've created outside the constuctor(in line 4, 5, 6)
    this.brand = brandReceived;
    this.price = priceReceived;
    this.material = materialReceived;
  }
}

let b1 = new BottleMaker("milton", 1000, "metal");
let b2 = new BottleMaker("cello", 800, "glass");
