// --------------> Interfaces

interface User{
    name: string;
    email: string;
    password: string;
    gender?: string
}

function abcd(obj: User): void{ // obj ka interface User hai
    // As interfact suggest this obj should contain these 3 fields
    // Now TS know this obj fields  
    obj.email
    obj.name
    obj.password
}

// abcd({}) // Throw error, we have to paas these 3 values to function, passed objectt should contain these 3 fields 

abcd({name: "ayush", email: "test@test.com", password: "xyz"}) // gender is optional

// --------------> Extending Interfaces

interface UserDetails{
    name: string;
    email: string;
    password: string
}


interface Admin extends UserDetails{
    // It also has UserDetails fields
    isAdmin: true
}

function abcd1(obj: Admin){
    obj.name
    obj.email
    obj.password
    obj.isAdmin
}

// --------------> Merging Interfaces

// If 2 or more interfaces with same name it all will get merged
interface a{
    name: string
}

interface a{
    email: string
}

function abcd3(obj: a){
    obj.name
    obj.email
}