import React from 'react';
import loginStyles from './login.module.css';

const Login = () => {
    return (
        <div className={loginStyles.mainContainer}>
            <div className={loginStyles.mainBlock}>
                <h1>Cards app</h1>
                <h2>Sign In</h2>
                <div className={loginStyles.inputField}>
                    <label htmlFor='txtEmail'>email</label>
                    <input id='txtEmail' type='email'/>
                    <input type={'password'}/>
                    <div>Forgot Password</div>
                </div>
                <div className={loginStyles.footerBlock}>
                    <button>Login</button>
                    <div className={loginStyles.signUpBlock}>
                        <div>Don't have an account?</div>
                        <button>Sign up</button>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Login;
