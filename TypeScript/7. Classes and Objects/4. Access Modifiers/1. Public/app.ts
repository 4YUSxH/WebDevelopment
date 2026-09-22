class BottleMaker {
    constructor(public name: string){
        console.log(name)
    }
}

let b1 = new BottleMaker("Milton")

b1.name = "Cello" // name changed 

// While using 'public' access modifer you can access and change the data within the same class, child class, outside the class