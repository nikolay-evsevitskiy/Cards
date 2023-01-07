import React from 'react';
import style from "./passwordRecovery.module.css";


const PasswordRecovery = () => {
    return (
        <div className={style.mainContainer}>
            <div className={style.mainBlock}>
                <h1>Cards app</h1>
                <h2>Forgot your password?</h2>
                <form>
                    <div className={style.inputBlock}>
                        <input className={style.inputField} type='email' required/>
                        <label className={style.inputLabel}>Email</label>
                    </div>
                    <p className={style.explainedBlock}>
                        Enter your email address and we will send you further instructions
                    </p>
                    <div className={style.action}>
                        <button className={style.actionButton}>Send instructions</button>
                    </div>
                </form>
                <div className={style.cardInfo}>
                    <p>Did you remember your password?</p>
                    <a href={'#'}>Try logging in</a>
                </div>
            </div>
        </div>
    );
};

export default PasswordRecovery;
