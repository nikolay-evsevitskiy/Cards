import React from 'react';
import style from "./checkEmail.module.css";
import logo from "../../images/CheckEmailLogo.png"

const CheckEmail = () => {
    return (
        <div className={style.mainContainer}>
            <div className={style.mainBlock}>
                <h1>Cards app</h1>
                <img src={logo} alt={'logo'} />
                <h2>Check Email</h2>
                <div className={style.cardInfo}>
                    <p>We’ve sent an Email with instructions to example@mail.com</p>
                </div>
            </div>
        </div>
    );
};

export default CheckEmail;
