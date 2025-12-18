import username from "./app.js" // Default Import
import userKaNaam from "./app.js" // We can import username exported from app.js using any name

import {age} from "./app.js" // Named export ko import same name se hi karna padega jis name se export hua tha unlike default export ko kisi bhi name se import kar sakte hai
import {gf} from "./app.js"
// import {gfss} from "./app.js" // Cannot write this it will throw an error
// import {age, gf} from "./app.js" // We can also write as it is shorter for names import 

console.log(username);
console.log(userKaNaam);

console.log(age);
console.log(gf);