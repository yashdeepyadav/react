import React from "react"
import ReactDOM from "react-dom/client"

const h1r = React.createElement("h1", { id: "h1r", className: "h1rcls"}, "From REACT")

// h1r is a javascript object

const roo = ReactDOM.createRoot(document.getElementById("root"))


roo.render(h1r)