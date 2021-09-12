import React from "react";
const ThemeContext = React.createContext({
  theme: "dark",
  toggleTheme: () => {},
});
ThemeContext.displayName = "ThemeContext";
export default ThemeContext;
