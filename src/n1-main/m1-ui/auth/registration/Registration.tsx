import React, {useState} from 'react';
import loginStyles from "./registration.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

const Registration = () => {
    const [passwordVision, setPasswordVision] = useState<boolean>(false);
    const [passwordConfirmVision, setPasswordConfirmVision] = useState<boolean>(false);
    const passwordVisionHandler = () => setPasswordVision(!passwordVision);
    const passwordConfirmVisionHandler = () => setPasswordConfirmVision(!passwordConfirmVision);
    return (
        <div className={loginStyles.mainContainer}>
            <div className={loginStyles.mainBlock}>
                <h1>Cards app</h1>
                <h2>Sign Up</h2>
                <form>
                    <div className={loginStyles.inputBlock}>
                        <input className={loginStyles.inputField} type='email' required/>
                        <label className={loginStyles.inputLabel}>Email</label>
                    </div>
                    <div className={loginStyles.inputBlock}>
                        <input className={loginStyles.inputField} type={passwordVision ? 'password' : 'text'}
                               required/>
                        <FontAwesomeIcon icon={passwordVision ? faEye : faEyeSlash} inverse={true}
                                         onClick={passwordVisionHandler} className={loginStyles.eyeIcon}/>
                        <label className={loginStyles.inputLabel}>Password</label>
                    </div>
                    <div className={loginStyles.inputBlock}>
                        <input className={loginStyles.inputField} type={passwordConfirmVision ? 'password' : 'text'}
                               required/>
                        <FontAwesomeIcon icon={passwordConfirmVision ? faEye : faEyeSlash} inverse={true}
                                         onClick={passwordConfirmVisionHandler} className={loginStyles.eyeIcon}/>
                        <label className={loginStyles.inputLabel}>Confirm password</label>
                    </div>
                    <div className={loginStyles.action}>
                        <button className={loginStyles.actionCancelButton}>Cancel</button>
                        <button className={loginStyles.actionButton}>Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;
