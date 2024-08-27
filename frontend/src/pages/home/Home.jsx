import React from "react";
import "./Home.css";
import Logout from "../../components/logout/Logout.jsx";
import { useTranslation } from "react-i18next";

const Home = () =>{
    const { t, i18n } = useTranslation();
    
    const changeLanguege = (Language) => {
        i18n.changeLanguage(Language);
    }

    return(
        <div>
            <h1>{t('welcome')}Página Inicial</h1>
            <button onClick={()=>changeLanguege('en')}>English</button>
            <button onClick={() => changeLanguege('pt')}>Portugues</button>
            <Logout/>
        </div>
    );
}

export default Home;