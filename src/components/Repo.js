import React, { useContext } from "react";
import Context from "../context/Context";

const Repo = () => {
  const { user } = useContext(Context);
  const data = user.repos;
  console.log(data);
  return (
    <div id="repocard-container">
      {data.map((repo) => (
        <div id="repocard">
          <h3>{repo.name}</h3>
          <h5>{repo.language}</h5>
          <h6>{repo.description}</h6>
        </div>
      ))}
    </div>
  );
};

export default Repo;
