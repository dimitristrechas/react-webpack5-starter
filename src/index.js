import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "./style.scss";

const title = "React with Webpack and Babel";

ReactDOM.render(<App title={title} />, document.getElementById("app"));

console.log(process.env.NODE_ENV);
