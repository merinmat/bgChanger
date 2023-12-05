import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("#FFC0CB");

  const handlePurple = () => {
    let purple = "#A020F0";
    setColor(purple);
  };

  const handleBlue = () => {
    let blue = "#0000FF";
    setColor(blue);
  };

  const handleGreen = () => {
    let green = "#355E3B";
    setColor(green);
  };

  {
    document.body.style.backgroundColor = color;
  }

  return (
    <div>
      <button
        onClick={handlePurple}
        style={{
          backgroundColor: "purple",
          color: "white",
          border: "1px solid black",
        }}
      >
        purple
      </button>{" "}
      {""}
      <button
        onClick={handleBlue}
        style={{
          backgroundColor: "blue",
          color: "white",
          border: "1px solid black",
        }}
      >
        Blue
      </button>{" "}
      {""}
      <button
        onClick={handleGreen}
        style={{
          backgroundColor: "green",
          color: "white",
          border: "1px solid black",
        }}
      >
        Green
      </button>
    </div>
  );
}

export default App;
