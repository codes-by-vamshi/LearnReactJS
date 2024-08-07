//const heading = React.createElement("h1", { id: "heading" }, "Hello World! - from ReactJS");
const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        React.createElement(
            "h1",
            {},
            "I'm an H1 Tag Element"
        )
    )
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);