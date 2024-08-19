import React from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

const RecoverPassword = () => {
    return (
        <div className="p-d-flex p-jc-center p-ai-center" style={{ height: '100vh' }}>
            <div className="p-card p-p-4 p-shadow-4">
                <h2 className="p-text-center" style={{textAlign: "center"}}>RECUPERAR SENHA</h2>
                <form className="p-fluid">
                    <div className="p-field" style={{paddingTop: "1vh", padding: "2vh"}}>
                        <label htmlFor="email">Email</label>
                        <InputText id="email" type="email" placeholder="Email" required />
                    </div>
                    <Button label="Recuperar Senha" icon="pi pi-refresh" className="p-mb-3" type="submit" />
                    <Button label="Cancelar" className="p-button-text" />
                </form>
            </div>
        </div>
    );
};

export default RecoverPassword;