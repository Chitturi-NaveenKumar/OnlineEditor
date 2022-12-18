import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import AuthPage from "./pages/AuthPage";
import EditorPage from "./pages/EditorPage";
import Error404Page from "./pages/Error404Page";
import HomePage from "./pages/HomePage";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        <Route path="/editor">
          {authCtx.isLoggedIn && <EditorPage />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="*">
          <Error404Page />
          {/* <Redirect to="/" /> */}
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
