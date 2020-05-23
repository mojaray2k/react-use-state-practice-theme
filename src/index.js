import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function Theme() {
  const [theme, setTheme] = React.useState("light");

  const toDark = () => setTheme("dark");
  const toLight = () => setTheme("light");

  return (
    <div className={theme}>
      {theme === "light" ? (
        <button onClick={toDark}>
          <span role="img" aria-label="flashlight">
            🔦
          </span>
        </button>
      ) : (
        <button onClick={toLight}>
          <span role="img" aria-label="lightbulb">
            💡
          </span>
        </button>
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Theme />, rootElement);
