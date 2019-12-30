import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Landing from "./components/pages/landing";
import Account from "./components/pages/account";
import Footer from "./components/pages/partials/footer";
import Help from "./components/pages/help";
import Leaderboards from "./components/pages/leaderboards";
import News from "./components/pages/news";
import Getstarted from "./components/pages/getstarted";
import Basics from "./components/pages/basics";



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/account" component={Account}/>
        <Route exact path="/help" component={Help}/>
        <Route exact path="/leaderboards" component={Leaderboards}/>
        <Route exact path="/news" component={News}/>
        <Route exact path="/getstarted" component={Getstarted}/>
        <Route exact path="/basics" component={Basics}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
