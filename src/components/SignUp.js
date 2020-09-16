import React,{useState, useContext} from 'react'
import Context from "../context/Context"
import firebase from "firebase";
import { Redirect } from "react-router-dom";
import { Helmet } from 'react-helmet';
const SignUp = () => {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const {authorized,setAuthorized}= useContext(Context);

     const auth= () => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then((response)=>{
          setAuthorized(true)
        }).catch((error)=>{
          if(error)
            alert(error.message)
        })
     }
     const submit=(e)=>{
       e.preventDefault();
       auth();
     }
     if(authorized)
      return <Redirect to="/"/>
    return (
      <div id="sign">
        <Helmet>
          <title>Sign Up</title>
        </Helmet>
        <div id="sign-box">
          <h1>Sign Up</h1>
          <form>
            <input
              placeHolder="    Email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeHolder="    Password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={submit}>Sign Up</button>
          </form>
        </div>
      </div>
    );
}

export default SignUp;
