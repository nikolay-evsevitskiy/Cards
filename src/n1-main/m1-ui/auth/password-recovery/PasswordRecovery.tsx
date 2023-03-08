import React, {ChangeEvent, useState} from 'react';
import style from "./passwordRecovery.module.css";
import {Link} from "react-router-dom";
import {PATH} from "../../routes/RoutesFunk";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../m2-bll/store";
import {Loader} from "../../common/Loader/Loader";
import {forgotUserPassword} from "../../../m2-bll/loginReducer";
import {ForgotDataType} from "../../../m3-api/login-api";


const PasswordRecovery = () => {
    const dispatch = useDispatch()
    const isFetching = useSelector<RootStateType, boolean>(state => state.login.isFetching)
    const [localInputState, setLocalInputState] = useState<string>('')
    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalInputState(e.currentTarget.value)
    }
    const buttonHandler = () => {
        const data: ForgotDataType = {
            email: localInputState,
            from: 'nikolay-evsevitskiy',
            message: `<div style="background-color: lime; padding: 15px">
password recovery link: 
<a href='http://localhost:3000/Cards?#/create-new-password/$token$'>
link</a>
</div`
        }
        dispatch(forgotUserPassword(data))
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
                        <button className={style.actionButton}
                                onClick={buttonHandler}
                        >Send instructions
                        </button>
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
