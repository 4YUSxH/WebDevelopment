import React, { useState } from "react";

function GraceMarks() {
  const [marks, setMarks] = useState([88, 76, 95, 67, 28]);
  let graceStuent = () => {
    let newmarks = marks.map((elem) => {
      if(elem>=95) return elem;
      else return elem+ 5;
    });
    console.log(newmarks);
    setMarks(newmarks);
  };

  return (
    <div>
      {marks.map((elem, idx) => {
        return <h1 key={idx}>Student {idx+1} marks is : {elem} {elem>33 ? "(Pass)" : "(Fail)"}</h1>
      })}
      <button onClick={graceStuent}>Update Button</button>
    </div>
  );
}

export default GraceMarks;
