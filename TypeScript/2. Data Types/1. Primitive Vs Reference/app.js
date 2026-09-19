"use strict";
// Primitive
Object.defineProperty(exports, "__esModule", { value: true });
let a = 1;
let b = a;
console.log(a, b);
b = b - 1;
console.log(a, b);
// a does not change when b is changed
// Reference
let c = [1, 2, 3];
let d = c;
console.log(c, d);
d.push(4);
console.log(c, d);
// c change when b is changed
//# sourceMappingURL=app.js.map
