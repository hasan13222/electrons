import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ModeProvider from "./contexts/ModeProvider.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ModeProvider>
  </React.StrictMode>
);
