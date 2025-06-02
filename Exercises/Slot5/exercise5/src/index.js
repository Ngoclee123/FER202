import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Exercise3 from "./ex3";
import Exercise5 from "./ex5";
import EX4 from "./ex4";
import Exercise7 from "./ex7";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Exercise3 /> */}
    {/* <EX4 /> */}
    {/* <Exercise5 /> */}
    <Exercise7 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
