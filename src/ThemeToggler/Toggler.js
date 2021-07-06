import context from "../Context/context";
import { useContext } from "react";

const Toggler = () => {
  const { themeMode, setThemeMode } = useContext(context);



  return (
    <div className="toggler">
      <button
      onClick={()=> {
        setThemeMode(themeMode === "light" ? "dark" : "light")
      }}
      >
        Switch to {themeMode === "light" ? "dark" : "light"}
      </button>
    </div>
  );
};

export default Toggler;