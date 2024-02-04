/**
 * This is the main class that uses React render the HTML element to Typescript.
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App2 from "./App2";

const rootElement = document.getElementById("root"); 

ReactDOM.createRoot(rootElement as HTMLElement).render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>
);