import React from 'react';
import { useAuth } from '../context/AuthContext';
import Form from './Form';
import "./login.css"
import logo from "../images/logo2.png"
// import otp from "../images/logo.jpeg"
// import userImg from "../images/user.png"

const Login = () => {
    const { onSubmitOTP, handleChange, onSignInSubmit, isVerified } = useAuth();

    if (isVerified) {
        return <Form />;
    } else {
        return (
            <div className='login_parent_container'>
                <img src={logo} alt="" className='logo-img'/>
                <h3>Verify Your Mobile Number to continue</h3>
                <form onSubmit={onSignInSubmit} className='login-form'>
                    <div id="sign-in-button"></div>
                    <input type="number" name="mobile" placeholder="Mobile number" required onChange={handleChange} />
                    <button type="submit" className='btn'>Submit</button>
                </form>
                <form onSubmit={onSubmitOTP} className='otp-form login-form'>
                    <input type="number" name="otp" placeholder="OTP Number" required onChange={handleChange} />
                    <button type="submit" className='btn'>Submit</button>
                </form>
            </div>
        );
    }
};

export default Login;
