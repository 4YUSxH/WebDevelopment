class BottleMaker {
    protected name = "Milton";
}

class MetalBottelMaker extends BottleMaker {
    public material = "Metal";

    changeName() {
        this.name = "some other name"
    }
}

let b1 = new MetalBottelMaker();
// b1.name = "Different name" this will throw an error
b1.changeName() // This wont trow an error

// Can be accessible in same class and Child class