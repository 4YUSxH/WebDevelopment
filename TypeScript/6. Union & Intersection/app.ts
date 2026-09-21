// --------------> Union Types

let a: number | null // 'a' can be number OR null
// '|' Represent union

// --------------> Intersection Types

type User = {
    name: string,
    email: string
}

type Admin = User & {
    isAdmin: boolean
}

function abce(a: Admin){
    a.name
    a.email
    a.isAdmin
    // Admin contain fields from User and Admin ki khud ki fields to hai hi  
}

// --------------> Difference Between Interfaces and Intersection Types

// You cannot merge to intersecton types whereas in Interface you can merge mutiple interfaces with same name

// In intersection types we use 'type' keyword and it is used for giving types to Data, wherease In interface we use 'interfact' keyword and it is used to create an interface of an Object