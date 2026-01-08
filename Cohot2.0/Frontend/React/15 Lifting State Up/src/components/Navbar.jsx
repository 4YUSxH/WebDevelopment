import React, { useState } from "react";

const Navbar = (props) => {
  const [newTheme, setNewTheme] = useState("");

  return (
    // 2nd : App se send ki gayi prop(changeTheme) ko use ko pass kiy anewTheme as funciton's arguement, line13  

    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.changeTheme(newTheme);
          setNewTheme("");
        }}
      >
        <input
          type="text"
          placeholder="Enter theme"
          value={newTheme}
          onChange={(e) => {
            setNewTheme(e.target.value);
          }}
        />
        <button>Sumbit</button>
      </form>
    </div>
  );
};

export default Navbar;
