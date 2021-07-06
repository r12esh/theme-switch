import { useContext, useEffect, useState } from "react";
import context from "./Context/context";
import Page from "./Pages/Page";
import "./App.css"

const App = () => {
  const [themeMode, setThemeMode] = useState("light");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme"); //This is a string
    if (localTheme) {
      setThemeMode(localTheme);
    }
  }, []);
  useEffect(() => localStorage.setItem("theme", themeMode));

  return (
    <context.Provider value={{ themeMode, setThemeMode }}>
      <Page />
    </context.Provider>
  );
};

export default App;
