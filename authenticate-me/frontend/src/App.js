import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import LoginFormPage from "./components/LoginFormPage";
import React from "react";

function App() {
  return (
    <Switch>
      <Route path="/login">
        <LoginFormPage />
      </Route>
    </Switch>
  );
}

export default App;
