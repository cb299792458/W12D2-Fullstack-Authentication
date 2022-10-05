import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import LoginFormPage from "./components/LoginFormPage";
import React from "react";
import SignUpForm from "./components/SignUpForm";

function App() {
  return (
    <Switch>

      <Route path="/login">
        <LoginFormPage />
      </Route>

      <Route path="/signup">
        <SignUpForm />
      </Route>

    </Switch>
  );
}

export default App;
