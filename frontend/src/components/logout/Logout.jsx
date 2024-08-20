import React from "react";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        navigate("/login");
    }

    return(
        <>
            <Button Label = "Sair" onClick={logout}/>
        </>
    );
}

export default Logout;