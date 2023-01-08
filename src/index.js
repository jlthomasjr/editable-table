import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";

import { Amplify } from 'aws-amplify';
import config from './aws-exports';
//import Resources from "./Resources";
import App from "./App";

Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
