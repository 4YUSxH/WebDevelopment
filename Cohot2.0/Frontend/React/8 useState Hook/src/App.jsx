import React, { useState } from "react";
import King from "./component/King";
import Queen from "./component/Queen";
import ChangeUser from "./component/ChangeUser";
import GraceMarks from "./component/GraceMarks";
import Wash from "./component/Wash";

function App() {
  // let a = 0;
  // let change = () => {
  //   console.log(a);
  //   a++; // a ki value to increase hogi par dom mai refeclt nahi hogi cause we are useing React
  // }
  // return (
  //   <div>
  //     <h1>{a}</h1>
  //     <button onClick={change}>Change a</button>
  //   </div>
  // ) // Aese State chnage nahi hoti hai react mai ye to indirectly JS{} ka use karke direct real dom mai hi changes kar rahe hai, humare aur dom ke beech mai ab ek broker hai react usse kahna hoga ki state change kardo useState hook ka use karke

  // useSatate Hook
  const [num, setNum] = useState(0);
  const btnClicked = () => {
    console.log("Clicked");
    setNum(num + 1); // React ko bola hai value ko set karne ke liye, and Dont write num++ cause num is a const
  };
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Change num</button>

      <div className="bottom">
        <King /> X <Queen />
      </div>

      <ChangeUser />

      <GraceMarks />

      <Wash user="female"/>
    </div>
  );
}

export default App;
