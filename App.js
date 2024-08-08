import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [React.createElement(
            "h1",
            {},
            "I'm an H1 Tag Element"
        ),
        React.createElement(
            "h2",
            {},
            "I'm an H2 Tag Element"
        )]
    )
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);