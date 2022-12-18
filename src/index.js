import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./store/auth-context";

ReactDOM.render(
  <AuthContextProvider>
    <BrowserRouter basename="/OnlineEditor">
      <App />
    </BrowserRouter>
  </AuthContextProvider>,
  document.getElementById("root")
);
