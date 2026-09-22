class BottleMaker {
  constructor(private name: string) {
    this.name = name;
  }

  changeName() {
    this.name = "Cello";
  }
}

let b1 = new BottleMaker("Milton");

// b1.name = "Cello" // You cant change the name outside the class

b1.changeName(); // You can change data by creating a methods because that method is created in the same class

// While using 'private' access modifer you can access and change the data within the same class

// You will not able to acess the data when you extend the class

// Note: As we know TS only warn about error in the end JS code will be compiled
