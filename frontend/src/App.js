import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login.jsx';
import Signup from './pages/signup/Signup.jsx';
import RecoverPassword from './pages/recoverPassword/RecoverPassword.jsx';
import ChangePassword from './pages/changePassword/ChangePassword.jsx';
import PrivateRouter from './components/PrivateRouter.jsx';
import Home from './pages/home/Home.jsx';
import Profile from './components/profile/Profile.jsx';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route element={<PrivateRouter/>}><Route path='/' element={<Home />}/></Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/recover-password" element={<RecoverPassword />} />
                    <Route path="/change-password" element={<ChangePassword />} />
                    <Route path="/profile" element={<Profile/>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;