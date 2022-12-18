import React from "react";
import { Link } from "react-router-dom";
import classes from "./Error404.module.css";
function Error404Page() {
  return (
    <div className={classes.errorContainer}>
      <h1>404 Error</h1>
      <p>Page not found</p>
      <p>
        <Link to="/">Back to home Page</Link>
      </p>
    </div>
  );
}

export default Error404Page;
