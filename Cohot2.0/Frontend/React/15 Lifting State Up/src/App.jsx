import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Parent from "./components/Parent";

const App = () => {
  const [theme, setTheme] = useState("light");

  // 1st : changeTheme ko paas kiya as prop to Navbar, line19
  // 3rd : Navbar se returnedTheme ko as paarmeter liya aur usse setTheme() mai set kiya, line11

  const changeTheme = (returnedTheme) => { // Ye function Navbar se App tak data laayega
    setTheme(returnedTheme);
  };

  return (
    <div>
      Seding data from Child to Parent component more like a reverse prop
      drilling is Lifting State Up

      <h1>Theme is {theme}</h1>
      <Navbar changeTheme={changeTheme} />

      {/* Another example of Lift State Up */}
      <Parent />
    </div>
  );
};

export default App;
