import React from "react";
import ReactDOM from "react-dom"; // Import ReactDOM from "react-dom" for rendering
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

// Use ReactDOM.render() to render your application
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
