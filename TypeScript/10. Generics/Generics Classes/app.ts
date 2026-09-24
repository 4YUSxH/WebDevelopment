class BottleMaker<T> {
    constructor(public key: T){}
}

let b1 = new BottleMaker("hey")
let b2 = new BottleMaker<string>("heyoo") // Define or not depends on you