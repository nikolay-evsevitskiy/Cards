import React, {ChangeEvent, useState} from 'react';
import style from "./addNewPassword.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

const AddNewPassword = () => {
    const [input, setInput] = useState<string>('')
    const [stateEye, setStateEye] = useState<boolean>(false);
    const changeEyeHandle = () => setStateEye(!stateEye);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value)
    }
    return (
        <div className={style.mainContainer}>
            <div className={style.mainBlock}>
                <h1>Cards app</h1>
                <h2>Create new password</h2>
                <form>
                    <div className={style.inputBlock}>
                        <input
                            className={style.inputField}
                            type={stateEye ? 'password' : 'text'}
                            value={input}
                            onChange={onChangeHandler}
                            required
                        />
                        <FontAwesomeIcon icon={stateEye ? faEye : faEyeSlash} inverse={true}
                                         onClick={changeEyeHandle} className={style.eyeIcon}/>
                        <label className={style.inputLabel}>Password</label>
                    </div>
                    <p className={style.explainedBlock}>
                        Create new password and we will send you further instructions to email
                    </p>
                    <div className={style.action}>
                        <button className={style.actionButton}>Create new password</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNewPassword;
