import React from 'react';
import loginStyles from './login.module.css';

const Login = () => {
    return (
        <div className={loginStyles.mainContainer}>
            <div className={loginStyles.mainBlock}>
                <h1>Cards app</h1>
                <h2>Sign In</h2>
                <form>
                    <div className={loginStyles.inputBlock}>
                        <input className={loginStyles.inputField} type='email' required/>
                        <label className={loginStyles.inputLabel}>Email</label>
                    </div>
                    <div className={loginStyles.inputBlock}>
                        <input className={loginStyles.inputField} type='password' required/>
                        <label className={loginStyles.inputLabel}>Password</label>
                    </div>
                    <div className={loginStyles.forgotBox}>
                        <div className={loginStyles.forgotButton}>
                            Forgot Password
                        </div>
                    </div>
                    <div className={loginStyles.action}>
                        <button className={loginStyles.actionButton}>Login</button>
                    </div>

                </form>
                <div className={loginStyles.cardInfo}>
                    <p>Don't have an account?</p>
                    <a href={'#'}>Sign up</a>
                </div>
            </div>
        </div>

    );
};

export default Login;
