import React from "react"; // Importing React for using Fragments
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let itemdata = [
    "Lookism",
    "One Piece",
    "My Hero Academia",
    "Fullmetal Alchemist",
    "Naruto",
  ];
  // let itemdata = [];

  if ((itemdata.length === 0)) { //If
    return <h3>I am still hungary.</h3>;
  }
  return (
    // <div id="unnecessary-div">
    //   <h1>Health Foods</h1>
    //   <ul class="list-group">
    //     <li class="list-group-item">An item</li>
    //     <li class="list-group-item">A second item</li>
    //     <li class="list-group-item">A third item</li>
    //     <li class="list-group-item">A fourth item</li>
    //     <li class="list-group-item">And a fifth one</li>
    //   </ul>
    // </div> for eliminating this unnecessary-div we use fragements

    <React.Fragment>
      <h1>Top Anime</h1> {/* Else */}
      {/* {itemdata.length === 0 ? <h3> I am still hungary. </h3> : null} */}
      {/* {itemdata.length === 0 && <h3> I am still hungary. </h3>} */}
      <ul class="list-group">
        <li class="list-group-item">Lookism</li>
        <li class="list-group-item">One Piece</li>
        <li class="list-group-item">My Hero Academia</li>
        <li class="list-group-item">Fullmetal Alchemist</li>
        <li class="list-group-item">Naruto</li>
      </ul>

      {/* There is better approach to do above task */}
      <h1>Top Anime</h1>
      <ul classname="list-group">
        {itemdata.map((item) => (
          <li key={item} class="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </React.Fragment>

    // We can directly use fragment without importing react using <>...</>
    // We should provide Key to every list item for better peroformance(isse react ussi key ke part ko refersh karega, react ka main purpose fullfill rahega)
    // Condtional Rendering: Showing Content based on condition can be done by usin:
        // If - else(above example)
        // Ternary Operator(on line number 32)
        // Logical Operator(on line number 33)
  );
}

export default App;
