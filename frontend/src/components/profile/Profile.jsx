import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import DefaultLayout from '../DefaultLayout';

const Profile = () => {

    const [cpf, setCpf] = useState('');
    const [address, setAddress] = useState({
        cep: '',
        rua: '',
        bairro: '',
        cidade: '',
        estado: ''
    });

    const isValidCPF = (cpf) => {
        return cpf.length === 11;
    };

    const fetchAddress = async (cep) => {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        setAddress({
            cep: data.cep,
            rua: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            estado: data.uf
        });
    };

    const handleCepChange = (e) => {
        const newCep = e.target.value;
        setAddress({ ...address, cep: newCep });
        if (newCep.length === 8) {
            fetchAddress(newCep);
        }
    };

    return (
        <div>
            <DefaultLayout/>
            <h2>Editar Perfil</h2>
            <div className="p-field">
                <label htmlFor="name">Nome Completo</label>
                <InputText id="name" placeholder="Nome Completo" />
            </div>
            <div className="p-field">
                <label htmlFor="cpf">CPF</label>
                <InputText id="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="CPF" />
                {!isValidCPF(cpf) && <small style={{ color: 'red' }}>CPF inválido</small>}
            </div>
            <div className="p-field">
                <label htmlFor="cep">CEP</label>
                <InputText id="cep" value={address.cep} onChange={handleCepChange} placeholder="CEP" />
            </div>
            <div className="p-field">
                <label htmlFor="rua">Rua</label>
                <InputText id="rua" value={address.rua} onChange={(e) => setAddress({ ...address, rua: e.target.value })} placeholder="Rua" />
            </div>
            <div className="p-field">
                <label htmlFor="bairro">Bairro</label>
                <InputText id="bairro" value={address.bairro} onChange={(e) => setAddress({ ...address, bairro: e.target.value })} placeholder="Bairro" />
            </div>
            <div className="p-field">
                <label htmlFor="cidade">Cidade</label>
                <InputText id="cidade" value={address.cidade} onChange={(e) => setAddress({ ...address, cidade: e.target.value })} placeholder="Cidade" />
            </div>
            <div className="p-field">
                <label htmlFor="estado">Estado</label>
                <InputText id="estado" value={address.estado} onChange={(e) => setAddress({ ...address, estado: e.target.value })} placeholder="Estado" />
            </div>
            <Button label="Salvar" icon="pi pi-save" />
        </div>
    );
};

export default Profile;