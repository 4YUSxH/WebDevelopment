// React is a library, developed by Facebook, doest not load whole DOM when some changes happen in a webite  
// Libraries Ex -> 
//                  - GSAP (Scrolling Animation)
//                  - Lenis (Smooth Scrolling)
//                  - Swiper (Add Sliders)
//                  - ThreeJs (3D)
//                  - ReactJs (Create UI of the website)

// <scriptcrossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script> ReactJs CDN
// <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script> ReactDOM CDN

// ReactJS creates the UI and ReactDOM connect that UI with DOM for efficient workingm It is like a broker between React UI and DOM

console.log(React); // Successfully implemented reactjs using cdn  
console.log(ReactDOM); // Successfully implemented reactdom using cdn  

// Creating UI using React
// Syntax -> React.createElement("Which element", attributes, "Element ke andar ka content")
let h1 = React.createElement("h1", null, "I am coming from React") // React created ui 

let container = document.querySelector("#container"); // Creatingg root element and body should not be the root
let root = ReactDOM.createRoot(container); // Connecting react UI with DOM using  ReactDOM
root.render(h1); // Which element going to render goes inside this render method

// root.render(h1); We cannot pass 2 arguement in render
// Else we can write below for rendering multiple elements
let heading1 = React.createElement("h1", null, "I am Heading1");
let heading2 = React.createElement("h1", null, "I am Heading2");
let div = React.createElement("div", {id : "parent", class : "red"}, [heading1, heading2]);
root.render(div); // Sirf 'div' render hpga to previous renderes element derender(remove) ho jayega

// This is how react work under the hood 

// Now we are gonna create same shit with using function 
function fnc(){
    return React.createElement("h1", null, "I am h1 coming from a function");
}
root.render(fnc()); // Using return concept as we seen in import-export func.js

// Now we can create different modules(js files) for different components liek navbar, header, footer, etc and using export and import we can use them 