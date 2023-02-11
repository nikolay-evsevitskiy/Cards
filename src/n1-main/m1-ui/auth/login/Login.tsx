import React, {useState} from 'react';
import loginStyles from './login.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from '@fortawesome/free-solid-svg-icons';
import {faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {useFormik} from "formik";
import {LoginParamsType, loginUser} from "../../../m3-api/login-api";


const Login = () => {
    const [toggleIconPassword, setToggleIconPassword] = useState<boolean>(true)
    const iconPasswordHandler = () => {
        setToggleIconPassword(!toggleIconPassword)
    }
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: Partial<Omit<LoginParamsType, 'captcha'>> = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 2) {
                errors.password = 'Invalid password address';
            }
            return errors;
        },
        onSubmit: values => {
            loginUser.pingServer()
                .then((data) => {
                    alert(data.data.ping)
                })
            alert(JSON.stringify(values, null, 2));
            formik.resetForm()
        },
    })

    return (
        <div className={loginStyles.mainContainer}>
            <div className={loginStyles.mainBlock}>
                <h1>Cards app</h1>
                <h2>Sign In</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className={loginStyles.inputBlock}>
                        <input className={loginStyles.inputField}
                               {...formik.getFieldProps("email")}
                        />
                        <label className={loginStyles.inputLabel}>Email</label>
                        {formik.touched.email
                            && formik.errors.email && <div style={{color: "red"}}>{formik.errors.email}</div>}
                    </div>
                    <div className={loginStyles.inputBlock}>
                        <input className={loginStyles.inputField}
                               type={toggleIconPassword ? 'password' : 'text'}
                               {...formik.getFieldProps("password")}
                        />
                        {formik.touched.password
                            && formik.errors.password && <div style={{color: "red"}}>{formik.errors.password}</div>}
                        <FontAwesomeIcon icon={toggleIconPassword ? faEye : faEyeSlash} inverse={true}
                                         onClick={iconPasswordHandler} className={loginStyles.eyeIcon}/>
                        <label className={loginStyles.inputLabel}>Password</label>
                    </div>
                    <div className={loginStyles.forgotBox}>
                        <div className={loginStyles.forgotButton}>
                            Forgot Password
                        </div>
                    </div>
                    <div className={loginStyles.action}>
                        <button className={loginStyles.actionButton} type={'submit'}>
                            Login
                        </button>
                    </div>
                </form>

                <div className={loginStyles.cardInfo}>
                    <p>Do not have an account?</p>
                    <a href={'#'}>Sign up</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
