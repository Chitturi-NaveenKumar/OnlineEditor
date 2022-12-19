import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import App from "./App";
import "./index.css";
import { AuthContextProvider } from "./store/auth-context";

ReactDOM.render(
  <AuthContextProvider>
    <HashRouter basename="/OnlineEditor">
      <App />
    </HashRouter>
  </AuthContextProvider>,
  document.getElementById("root")
);
