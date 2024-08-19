import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login.jsx';
import Signup from './pages/signup/Signup.jsx';
import RecoverPassword from './pages/recoverPassword/RecoverPassword.jsx';
import ChangePassword from './pages/changePassword/ChangePassword.jsx';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/recover-password" element={<RecoverPassword />} />
                    <Route path="/change-password" element={<ChangePassword />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;