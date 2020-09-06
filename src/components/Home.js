import React, { useState, useContext } from "react";
import Context from "../context/Context";
import Axios from "axios";
import Card from "./Card";
import Repo from "./Repo"
const Home = () => {
  const [query, setQuery] = useState("");
  const { user, setUser, authorized } = useContext(Context);
  const fetchDetails = async () => {
    const { data } = await Axios("https://api.github.com/users/" + query);
    const userapi = data;
    const response = await Axios(userapi.repos_url);
    const userData = {
      name: userapi.name,
      img: userapi.avatar_url,
      publicRepos: userapi.public_repos,
      followers: userapi.followers,
      repos: response.data,
    };
    setUser(userData);
  };
  const fireUp = (e) => {
    e.preventDefault();
    if(!authorized)
        alert("Please Sign In or Sign Up")
    else
    fetchDetails();
  };
  return (
    <div id="home-container">
      <div id="search">
        <input
          placeholder="   Please Enter Github Username"
          type="name"
          name="name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={fireUp}>Search</button>
      </div>
      {user ? (
        <div id="card-repo">
          <Card />
          <Repo/>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Home;
