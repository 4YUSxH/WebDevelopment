//Arrays: 
console.log("Array Introduction");

let arr = [1, 2, 3, 4];
console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[2]);
arr[0] = 100;//Arrays are muttable
console.log(arr);
console.log(typeof(arr));//Type of array is object

//Array Methods:
console.log("Array Method");

console.log(arr.toString());//Convert array into string with comma sperated values 
console.log(arr.join("_"));//Comma sperated values is replaced by user specific value 

console.log();
console.log(arr.pop());//It will delete last element and return it
console.log(arr);

console.log();
console.log(arr.push(500));//It will push element at last index
console.log(arr);
console.log(arr.push("Yuuji"));//we can also push string or other datatype to array
console.log(arr);
console.log(arr.push(true));
console.log(arr);

console.log();
console.log(arr.shift());//It will delete first element
console.log(arr);
console.log(arr.unshift(100));//It will add elemeny at first index
console.log(arr);

console.log();
console.log(delete arr[1]);// It will delete element but not the memeory allocation
console.log(arr);

console.log();
let a = [1, 2]
let b = [3, 4]
let c = [5, 6]
console.log(a.concat(b,c, "ConcatedElement"));//It will concate a,b,c and ConcatedElement                                                 
// It's important to note that concat() does not modify the original array a. Instead, it returns a new array that combines the elements of a, b, c and ConactedElement.

console.log();
let d = [5,3,5,2]
console.log(d.sort());//It will sort the array
console.log(d);//Modify the original arrayy

console.log();
let e = [10, 20, 30, 40]
console.log(e.splice(0, 2));//It will delete elements from index 1 to 3 amd return it
console.log(e);//It will print the array after deletion
let f = [1, 2, 3, 4, 5]
console.log(f.splice(0, 2, 100, 200));//It will remove index 1 to 3(hence 2) and add 100 and 200 at index 0 and 1 respectively
console.log(f);

console.log();
let g = [1, 2, 3, 4, 5]
console.log(g.slice(2));//Remove all the elements after index 2 and return it
console.log(g);//But it will not modify original array
console.log(g.slice(0, 3));//Remove all the elements from index 0 to 3(hence 2) and return it
console.log(g);//But it will not modify original array

console.log();
console.log(g.reverse());//It will reverse the array
console.log(g);//It will modify original array
