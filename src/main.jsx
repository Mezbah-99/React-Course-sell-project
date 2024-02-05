import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DLContextProvider } from "./Contexts/DLContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DLContextProvider>
      <App />
    </DLContextProvider>
  </React.StrictMode>
);
