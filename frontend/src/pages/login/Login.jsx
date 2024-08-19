import React from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="p-d-flex p-jc-center p-ai-center" style={{height: "100vh"}}>
            <div className="p-card p-p-4 p-shadow-4" style={{ width: '100%', maxWidth: '500px', padding: '2rem' }}>
                <h2 className="p-text-center" style={{textAlign: "center"}}>LOGIN</h2>
                <form className="p-fluid">
                    <div className="p-field" style={{paddingTop: "1vh", padding: "2vh"}}>
                        <label htmlFor="email">Email</label>
                        <InputText id="email" type="email" placeholder="Email" required />
                    </div>
                    <div className="p-field" style={{paddingTop: "1vh", padding: "2vh"}}>
                        <label htmlFor="password">Senha</label>
                        <Password id="password" placeholder="Senha" required toggleMask />
                    </div>
                    <Button label="Acessar" icon="pi pi-sign-in" className="p-mb-3" type="submit" />
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