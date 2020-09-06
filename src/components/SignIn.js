import React, { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div id="sign">
      <div id="sign-box">
        <h1>Sign In</h1>
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
          <button>Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
