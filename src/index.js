import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
// import { SimpleForm } from "./components/02-useEffect/SimpleForm";
// import { FormWithCustomHook } from "./components/02-useEffect/FormWithCustomHook";
// import { MultipleCustomHooks } from "./components/03-examples/MultipleCustomHooks";
// import { HookApp } from "./HookApp";
// import { CounterApp } from "./components/01-useState/CounterApp";
// import { CounterWithCustomHook } from "./components/01-useState/CounterWithCustomHook";
// import { FocusScreen } from "./components/04-useRef/FocusScreen";
// import { RealExampleRef } from "./components/04-useRef/RealExampleRef";
import { Layout } from "./components/05-useLayoutEffect/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Layout />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
