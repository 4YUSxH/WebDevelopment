import React, { useEffect, useState } from "react";

const App3 = () => {
  const [num3, setNum3] = useState(0);

  useEffect(function () {
    console.log("Only num3 ke render hone chalega"); // Even jab num2 chnage hoga jisse uio rerender hoga tab bhi nahi chalega
  }, [num3]); // num3 in Dependecy Array

  return (
    <div>
      <h1>App3</h1>
      <h1>{num3}</h1>
      <button
        onClick={() => {
          setNum3(num3 + 1);
        }}
      >
        Increase Num3
      </button>
    </div>
  );
};

export default App3;
