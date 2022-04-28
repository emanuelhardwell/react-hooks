import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
// import { SimpleForm } from "./components/02-useEffect/SimpleForm";
// import { FormWithCustomHook } from "./components/02-useEffect/FormWithCustomHook";
import { MultipleCustomHooks } from "./components/03-examples/MultipleCustomHooks";
// import { CounterWithCustomHook } from "./components/01-useState/CounterWithCustomHook";

// import { HookApp } from "./HookApp";
// import { CounterApp } from "./components/01-useState/CounterApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MultipleCustomHooks />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
