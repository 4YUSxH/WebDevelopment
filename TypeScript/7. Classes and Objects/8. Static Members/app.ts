// I am directly accessing this field without creting an object from class using new keyword
console.log(Math.PI)
console.log(Math.random)

// We doesn't have to create an object for accessing class fields

class AyuJs {
    static version = 1.0
}

console.log(AyuJs.version)
// No need create a instance/object