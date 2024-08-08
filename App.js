import React from "react";
import ReactDOM from "react-dom/client";

// Creating Parent using Functional Component
const Parent = () => (
  <div id="parent">
    <div id="child">
      <h1>I'm an H1 Tag Element - Using JSX</h1>
      <h2>I'm an H2 Tag Element - Using JSX</h2>
    </div>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Parent />);
