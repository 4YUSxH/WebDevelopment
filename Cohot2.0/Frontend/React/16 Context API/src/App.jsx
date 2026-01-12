import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sections from "./components/Sections";

const App = () => {
  return (
    <div>
      <Navbar>
        {/* <h1>This is children of navbar you can access it in navbar component as a prop</h1> */}
      </Navbar>
      <Sections />
      <Footer />
    </div>
  );
};

export default App;

// create context folder and in this folder create context file(UserContext)
// wrap app in main.jsx with context file(UserContext)
// in UserContext createContext() and save it in a variable(UserDataContext) and export it
// creta UserDataContext.Provider and provide data to this and any component can access data 