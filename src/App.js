import React,{useState} from 'react';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import './App.css';
import Context from "./context/Context"
import Header from "./layout/Header"
import Home from "./components/Home"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import NotFound from "./components/NotFound"

function App() {
  const [user,setUser]=useState(null);
  const [authorized,setAuthorized]=useState(null);
  return (
    <Router>
      <Header user={authorized} />
      <Context.Provider value={{user, setUser,authorized}}>
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
