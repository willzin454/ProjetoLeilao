import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Messages } from 'primereact/messages';

const ChangePassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const messages = React.useRef(null);

    const validatePassword = (password) => {
        const errors = [];
        if (password.length < 6) errors.push("A senha deve ter no mínimo 6 caracteres.");
        if (!/[A-Z]/.test(password)) errors.push("Deve conter pelo menos uma letra maiúscula.");
        if (!/[a-z]/.test(password)) errors.push("Deve conter pelo menos uma letra minúscula.");
        if (!/[0-9]/.test(password)) errors.push("Deve conter pelo menos um número.");
        if (!/[^A-Za-z0-9]/.test(password)) errors.push("Deve conter pelo menos um caractere especial.");
        return errors;
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        const validationErrors = validatePassword(newPassword);
        setErrors(validationErrors);
        if (messages.current) {
            messages.current.clear();
            if (validationErrors.length > 0) {
                validationErrors.forEach(error => messages.current.show({ severity: 'error', detail: error }));
            }
        }
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    return (
        <div className="p-d-flex p-jc-center p-ai-center" style={{ height: '100vh' }}>
            <div className="p-card p-p-4 p-shadow-4">
                <h2 className="p-text-center">ALTERAR SENHA</h2>
                <form className="p-fluid">
                    <div className="p-field">
                        <label htmlFor="email">Email</label>
                        <InputText id="email" type="email" placeholder="Email" required />
                    </div>
                    <div className="p-field">
                        <label htmlFor="code">Código</label>
                        <InputText id="code" type="text" placeholder="Código" required />
                    </div>
                    <div className="p-field">
                        <label htmlFor="new-password">Nova Senha</label>
                        <Password id="new-password" value={password} onChange={handlePasswordChange} toggleMask feedback={false} placeholder="Nova Senha" required />
                    </div>
                    <div className="p-field">
                        <label htmlFor="confirm-password">Confirmar Senha</label>
                        <Password id="confirm-password" value={confirmPassword} onChange={handleConfirmPasswordChange} toggleMask feedback={false} placeholder="Confirmar Senha" required />
                    </div>
                    <Messages ref={messages} />
                    <Button label="Alterar Senha" icon="pi pi-lock" className="p-mb-3" type="submit" disabled={errors.length > 0 || password !== confirmPassword} />
                    <Button label="Cancelar" className="p-button-text" />
                </form>
            </div>
        </div>
    );
};

export default ChangePassword;