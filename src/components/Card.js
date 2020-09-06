import React,{useContext} from 'react'
import Context from "../context/Context"
const Card = () => {
    const {user}=useContext(Context);
    const styleDetails = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
      width: "100%",
      background: "rgb(204, 75, 43)",
      color:"snow",
      height: "200px",
    };
    const styleImg={
        width:"100%",
        height:"100%"
    }
    return (
      <div id="card">
        <div>
          <img src={user.img} alt="user image" style={styleImg}/>
          <div style={styleDetails}>
            <h1>{user.name}</h1>
            <h3>Followers : {user.followers}</h3>
            <h3>Public Repositories : {user.publicRepos}</h3>
          </div>
        </div>
      </div>
    );
}

export default Card
