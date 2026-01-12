import React, { createContext, useState } from "react";

export const provideTheme = createContext();
const ThemeContext = (prop) => {
  const [theme, setTheme] = useState("dark");
  return (
    <div>
      <provideTheme.Provider value={[theme, setTheme]}>
        {prop.children}
      </provideTheme.Provider>
    </div>
  );
};

export default ThemeContext;
