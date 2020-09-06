import React, { useState } from "react";
//React Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
//Context for accesing data in central
import Context from "./context/Context";
//Components
import Header from "./layout/Header";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import NotFound from "./components/NotFound";
//firebase
import firebaseConfig from "./firebase/firebaseConfig.js";
import * as firebase from "firebase/app";
import "firebase/auth";
firebase.initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(null);
  const [authorized, setAuthorized] = useState(false);
  return (
    <Router>
      <Context.Provider value={{ user, setUser, authorized, setAuthorized }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Context.Provider>
    </Router>
  );
}

export default App;
