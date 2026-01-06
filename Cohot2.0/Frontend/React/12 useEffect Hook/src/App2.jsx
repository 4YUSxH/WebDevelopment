import React, { useEffect, useState } from "react";

const App2 = () => {
  const [num2, setNum2] = useState(0);

  useEffect(function () {
    console.log("Ek baar hi chalega(First UI render par)"); // Even jab num2 chnage hoga jisse uio rerender hoga tab bhi nahi chalega
  }, []); // Dependecy Array and ye only variable hi ho sakti, not any constant

  return (
    <div>
      <h1>App2</h1>
      <h1>{num2}</h1>
      <button
        onClick={() => {
          setNum2(num2 + 1);
        }}
      >
        Increase Num2
      </button>
    </div>
  );
};

export default App2;
