// Ek aesa function banao jo argument mai koi bhi value accept karle

// Only accpet string
function abcd(a: string) {}

// Now the main puropse of TS i.e. Type Checking is removed, hence you cant use any
function abcd1(a: any) {}

// It is not possible, how many checks you will apply for making this code work and it is not efficient
function abce3(a: unknown) {
  console.log(a);
}
abce3("hety");
abce3(1);
abce3(true);
abce3({ neon: "yes" });

// Function Generic
function abcde<T>(a: T) {}

abcde<string>("Ayush");
abcde<number>(5);
abcde<boolean>(true);

abcde({ obj: "yes" }); // TS can automatically infere the type
abcde(5); // TS can automatically infere the type

// T -> Contain the datatype which is sent on runtime

// One important thing: this will create an error
function abcef<T>(a: T, b: T): T {
    return "HEYOO" // it is "String Literal Not String both are different"
}

abcef<string>("hey", "heyo")

function abcef1<T>(a: T, b: T): T {
    return "HEYOO" as T // Type Assertion is performed
    
    // return <T>"HEYOO" // Type Assertion is performed

    // a -> string
    // b -> string
    // "HEYOO" -> string literal
}

abcef1<string>("hey", "heyo")

