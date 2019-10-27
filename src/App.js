import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Landing from "./components/pages/landing";
import Account from "./components/pages/account";
import Footer from "./components/pages/partials/footer";



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/account" component={Account}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
