function abcd(a: string): void;
function abcd(a: string, b: number): number;

function abcd(a: any, b?: any) {
    if(typeof a === "string" && b === undefined){
        console.log("hey")
    }
    if(typeof a === "string" && typeof b === "number"){
        return 123
    }
    else throw new Error("Somethign went wrong")
}

abcd("hey")
abcd("add", 5)