import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./choices.min.css";
import "./styles.scss";
import "react-input-range/lib/css/index.css";
import "react-perfect-scrollbar/dist/css/styles.css";

import Routing from "./router/routing";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routing />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
