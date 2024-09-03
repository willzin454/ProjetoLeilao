import { Menubar } from "primereact/menubar";
import React from "react";
import { useNavigate } from "react-router-dom";

const DefaultLayout = () =>{
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        navigate("/login");
    }

    const items = [
        { label: 'Home', icon: 'pi pi-fw pi-home', command: () => window.location = '/Home' },
        { label: 'Perfil', icon: 'pi pi-fw pi-user', command: () => window.location = '/Profile' },
        { label: 'Logout', icon: 'pi pi-fw pi-power-off', command: logout }
    ];

    return(
        <Menubar model={items}/>
    );
}

export default DefaultLayout;