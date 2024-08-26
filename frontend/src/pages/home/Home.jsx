import React from "react";
import "./Home.css";
import Logout from "../../components/logout/Logout.jsx";
import { Menubar } from 'primereact/menubar';

const Home = () => {
    const items = [
        { label: 'Home', icon: 'pi pi-fw pi-home' },
        { label: 'Perfil', icon: 'pi pi-fw pi-user', command: () => window.location = '/profile' },
        { label: 'Logout', icon: 'pi pi-fw pi-power-off', command: () => <Logout/>}
    ];

    return (
        <div className="home-container">
            <Menubar model={items} />

            <div className="content">
                <h1>Bem-vindo à Página Principal</h1>
                <p>Aqui você pode acessar as funcionalidades principais.</p>
            </div>

            <footer className="footer">
                <p>Instituto Federal do Paraná © 2024</p>
            </footer>
        </div>
    );
};

export default Home;