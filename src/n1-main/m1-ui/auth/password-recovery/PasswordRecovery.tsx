import React, {ChangeEvent, useState} from 'react';
import style from "./passwordRecovery.module.css";
import {Link} from "react-router-dom";
import {PATH} from "../../routes/RoutesFunk";
import {useSelector} from "react-redux";
import {RootStateType} from "../../../m2-bll/store";
import {Loader} from "../../common/Loader/Loader";


const PasswordRecovery = () => {
    const isFetching = useSelector<RootStateType, boolean>(state => state.login.isFetching)
    const [localInputState, setLocalInputState] = useState<string>('')
    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalInputState(e.currentTarget.value)
    }
    return (
        <div className={style.mainContainer}>
            <div className={style.mainBlock}>
                <h1>Cards app</h1>
                <h2>Forgot your password?</h2>
                <form>
                    <div className={style.inputBlock}>
                        <input value={localInputState} onChange={inputHandler} className={style.inputField} type='email'
                               required/>
                        <label className={style.inputLabel}>Email</label>
                    </div>
                    <p className={style.explainedBlock}>
                        Enter your email address and we will send you further instructions
                    </p>
                    <div className={style.action}>
                        <button className={style.actionButton}>Send instructions</button>
                    </div>
                    <div className={style.loaderBlock}>
                        {isFetching && <Loader size={35}/>}
                    </div>
                </form>
                <div className={style.cardInfo}>
                    <p>Did you remember your password?</p>
                    <Link to={PATH.LOGIN}>Try logging in</Link>
                </div>
            </div>
        </div>
    );
};

export default PasswordRecovery;
