import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

import "./choices.min.css";
import "./styles.scss";
import "react-input-range/lib/css/index.css";
import "react-perfect-scrollbar/dist/css/styles.css";

import Routing from "./router/routing";
import ParamsProvider from "./context/ParamsProvider";

ReactDOM.render(
  <React.StrictMode>
    <ParamsProvider>
      <Router>
        <Routing />
      </Router>
    </ParamsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
