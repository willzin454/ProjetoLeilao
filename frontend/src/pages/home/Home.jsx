import React from "react";
import "./Home.css";
import Logout from "../../components/logout/Logout.jsx";

const Home = () =>{
    return(
        <div>
            <h1>Página Inicial</h1>
            <Logout/>
        </div>
    );
}

export default Home;