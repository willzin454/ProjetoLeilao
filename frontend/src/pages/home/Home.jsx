import React from "react";
import "./Home.css";
import DefaultLayout from "../../components/DefaultLayout";

const Home = () => {

    return (
        <div>
            <DefaultLayout/>
            <div>
                <h1>Bem-vindo à Página Principal</h1>
                <p>Aqui você pode acessar as funcionalidades principais.</p>
            </div>

            <footer>
                <p>Instituto Federal do Paraná © 2024</p>
            </footer>
        </div>
    );
};

export default Home;