import React from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './Login.css';

export const Login = () => {
    const [usuario, setUsuario] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handChange = (input) => {
        setUsuario({ ...usuario, [input.target.name] : input.target.value});
    }

    const login = () => {
        if (usuario.email == "williamcarvalho493@gmail.com" && usuario.password == "123") {
            let token = "token do backend"
            localStorage.setItem("token", token);
            localStorage.setItem("usuario", usuario);
            navigate("/");
        } else {
            alert("Login Falhou!")
        }
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-title">LOGIN</h2>
                <form className="p-fluid">
                    <div className="login-field">
                        <label htmlFor="email">Email</label>
                        <InputText onChange={handChange} id="email" name='email' type="email" placeholder="Email" required />
                    </div>
                    <div className="login-field">
                        <label htmlFor="password">Senha</label>
                        <InputText onChange={handChange} id="password" name='password' type="password" placeholder="Senha" required />
                    </div>
                    <Button onClick={login} label="Acessar" className="login-button p-mb-3" icon="pi pi-sign-in" type="submit" />
                    <div className="login-links">
                        <Link to="/signup">
                            <Button label="Cadastrar-se" className="p-button-text" />
                        </Link>
                        <Link to="/recover-password">
                            <Button label="Recuperar Senha" className="p-button-text" />
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;