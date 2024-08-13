import React from "react";
import "./Login.css";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

const Login = () =>{

    return(
        <div>
            <Card title="Login">
                <InputText/>
                <Password feedback={false}/>
                <Button label="Login"/>
            </Card>
        </div>
    );
}
export default Login;