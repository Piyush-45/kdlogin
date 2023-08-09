// AuthContext.js
import React, { createContext, useState, useRef, useContext } from 'react';
import firebase from '../firebase';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [mobile, setMobile] = useState('');
    const [otp, setOtp] = useState('');
    const recaptchaVerifierRef = useRef(null);
    const confirmationResultRef = useRef(null);
    const [isVerified, setIsVerified] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'mobile') {
            setMobile(value);
        } else if (name === 'otp') {
            setOtp(value);
        }
    };

    const configureCaptcha = () => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
            size: 'invisible',
            callback: (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                onSignInSubmit();
                console.log('Recaptca verified');
            },
            defaultCountry: 'IN',
        });

        recaptchaVerifierRef.current = window.recaptchaVerifier;
    };

    const onSignInSubmit = (e) => {
        e.preventDefault();
        configureCaptcha();
        const phoneNumber = '+91' + mobile;
        console.log(phoneNumber);

        firebase
            .auth()
            .signInWithPhoneNumber(phoneNumber, recaptchaVerifierRef.current)
            .then((confirmationResult) => {
                confirmationResultRef.current = confirmationResult;
                // console.log(confirmationResult);
                console.log('OTP has been sent');
                
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const onSubmitOTP = (e) => {
        e.preventDefault();
        const code = otp;
        console.log(code);

        confirmationResultRef.current
            .confirm(code)
            .then((result) => {
                const user = result.user;
                console.log(JSON.stringify(user));
                console.log('User is verified');
                setIsVerified(true)
            })
            .catch((error) => {
                console.log(error);
            });
    };



    return <AuthContext.Provider value={{ isVerified, setIsVerified, onSubmitOTP, handleChange, onSignInSubmit }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
