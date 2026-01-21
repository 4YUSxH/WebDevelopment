1. Use node.js for running js outside the browser i.e. on terminal

2. Packages -> Packages ek aesa code hai jisse humne nahi likha hai kisi or devleoper ne likha hai aur uss developer ne uske code ko pulbic kar diya hai jisse other devlopers bhi uss code ko use kar sake aur wo publically available code npm.js ki website par hota hai

npm i <package_name> -> npmjs.com ki website se publically available code local means iss system par install ho jayega

3. node_module -> Package ka code iss folder mai store hota hai

4. package.json -> day-1 folder ki saari files jin jin packages par depend karti hai usko ye file maintain karti hai

{
  "dependencies": {
    "express": "^5.2.1"
  }
}

5. package-lock.json -> Ek x package hai wo y package par and y package z par depend karta hai aur z independent package hai, issi complex structure ko ye file maintain karti hai

