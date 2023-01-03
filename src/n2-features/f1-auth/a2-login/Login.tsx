import React from 'react';
import loginStyles from './login.module.css';

const Login = () => {
    return (
        <div className={loginStyles.mainContainer}>
            <div className={loginStyles.mainBlock}>
                <h1>Cards</h1>
                <h2>Sign In</h2>
                <div className={loginStyles.inputField}>
                    <input type={'email'}/>
                    <input type={'password'}/>

                </div>
            </div>
        </div>

    );
};

export default Login;
