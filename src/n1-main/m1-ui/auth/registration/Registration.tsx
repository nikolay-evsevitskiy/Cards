import React, {useState} from 'react';
import style from "./registration.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

const Registration = () => {
    const [passwordVision, setPasswordVision] = useState<boolean>(false);
    const [passwordConfirmVision, setPasswordConfirmVision] = useState<boolean>(false);
    const passwordVisionHandler = () => setPasswordVision(!passwordVision);
    const passwordConfirmVisionHandler = () => setPasswordConfirmVision(!passwordConfirmVision);
    return (
        <div className={style.mainContainer}>
            <div className={style.mainBlock}>
                <h1>Cards app</h1>
                <h2>Sign Up</h2>
                <form>
                    <div className={style.inputBlock}>
                        <input className={style.inputField} type='email' required/>
                        <label className={style.inputLabel}>Email</label>
                    </div>
                    <div className={style.inputBlock}>
                        <input className={style.inputField} type={passwordVision ? 'password' : 'text'}
                               required/>
                        <FontAwesomeIcon icon={passwordVision ? faEye : faEyeSlash} inverse={true}
                                         onClick={passwordVisionHandler} className={style.eyeIcon}/>
                        <label className={style.inputLabel}>Password</label>
                    </div>
                    <div className={style.inputBlock}>
                        <input className={style.inputField} type={passwordConfirmVision ? 'password' : 'text'}
                               required/>
                        <FontAwesomeIcon icon={passwordConfirmVision ? faEye : faEyeSlash} inverse={true}
                                         onClick={passwordConfirmVisionHandler} className={style.eyeIcon}/>
                        <label className={style.inputLabel}>Confirm password</label>
                    </div>
                    <div className={style.action}>
                        <button className={style.actionCancelButton}>Cancel</button>
                        <button className={style.actionButton}>Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;
