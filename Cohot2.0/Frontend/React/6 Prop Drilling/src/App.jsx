import React from "react";
import Variable1 from "./componenets/Variable1";
import PassingDataThroughJS from "./componenets/PassingDataThroughJS2";
import Card3 from "./componenets/Card3";
import Button4 from "./componenets/Button4";

function App() {
  let arr3 = ["Tony", "Loly", "Xoly"];
  return (
    <div className="p-3 h-screen">
      <Variable1 />
      {/* Since we know PassingDataThroughJS is a functional compoenent hence it is reusable */}
      {/* It is kinda prop drilling but using JS(Function concepts) we dont prefer now */}
      {PassingDataThroughJS(10, 30)} {/* Paassing data through arguements and all the work done using JS no JSX involved */}
      {PassingDataThroughJS(50, 40)} 

      {/* Props Drilling only can be achieved using JSX*/}
      <Card3 user="Neon" age={21}/>
      <Card3 user="DevX" age={25}/>

      <Button4 content="Click Now"/>
      <Button4 content="Download"/>
      <Button4 content="Explore More Content"/>

      {arr3.map((elem) => {
        return <Button4 content={elem}/>
      })}
    </div>
  );
}

export default App;
