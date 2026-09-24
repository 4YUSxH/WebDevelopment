// function abcd(name: string, callback: "What type?")

// function abcd(name: string, callback: function) // You cannot write like this

// Function Types
function abcd(name: string, cb: (value: string) => void){

}

abcd("Ayush", (value: string) => {
    console.log(value)
})

// Another Example
function abcde(name: string, age: number, cb: (args: string) => void){
    cb("Heyo")
    // Indirectly cb contain callback code that we've sent when we called abcde
}

abcde("Robin", 19, (args: string) => {
    console.log(args)
})