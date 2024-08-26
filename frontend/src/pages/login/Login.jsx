import React from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
//import { Password } from 'primereact/password';   parece que esse componente esta fazendo o auto complet.
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
    const [usuario, setUsuario] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handChange = (input) => {
        setUsuario({ ...usuario, [input.target.name] : input.target.value});
    }

    const login = () => {
        //chamada para o back-and para verificar as credenciais.
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
        <div className="p-d-flex p-jc-center p-ai-center" style={{height: "100vh"}}>
            <div className="p-card p-p-4 p-shadow-4" style={{ width: '100%', maxWidth: '500px', padding: '2rem' }}>
                <h2 className="p-text-center" style={{textAlign: "center"}}>LOGIN</h2>
                <form className="p-fluid">
                    <div className="p-field" style={{paddingTop: "1vh", padding: "2vh"}}>
                        <label htmlFor="email">Email</label>
                        <InputText onChange={handChange} id="email" name='email' type="email" placeholder="Email" required />
                    </div>
                    <div className="p-field" style={{paddingTop: "1vh", padding: "2vh"}}>
                        <label htmlFor="password">Senha</label>
                        <InputText onChange={handChange} id="password" name='password' type="password" placeholder="Senha" required toggleMask/>
                    </div>
                    <Button onClick={login} label="Acessar" style={{paddingRight: "40px"}} icon="pi pi-sign-in" className="p-mb-3" type="submit" />
                    <div className="p-d-flex p-jc-between">
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