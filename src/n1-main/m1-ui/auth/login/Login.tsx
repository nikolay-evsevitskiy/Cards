import React, {useState} from 'react';
import loginStyles from './login.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from '@fortawesome/free-solid-svg-icons';
import {faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {ErrorMessage, Field, Form, Formik} from "formik";


const Login = () => {
    const [toggleIconPassword, setToggleIconPassword] = useState<boolean>(true)
    const iconPasswordHandler = () => {
        setToggleIconPassword(!toggleIconPassword)
    }

    return (
        <div className={loginStyles.mainContainer}>
            <div className={loginStyles.mainBlock}>
                <h1>Cards app</h1>
                <h2>Sign In</h2>
                <Formik
                    initialValues={{email: '', password: ''}}
                    validate={values => {
                        const errors = {
                            email: ''
                        };
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}>
                    {({isSubmitting}) => (
                        <Form>
                            <div className={loginStyles.inputBlock}>
                                <Field className={loginStyles.inputField} type="email" name="email"/>
                                <label className={loginStyles.inputLabel}>Email</label>
                                <ErrorMessage name="email" component="div"/>
                            </div>
                            <div className={loginStyles.inputBlock}>
                                <Field className={loginStyles.inputField}
                                       type={toggleIconPassword ? 'password' : 'text'} name="password"/>
                                <ErrorMessage name="password" component="div"/>
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
                                <button className={loginStyles.actionButton} type={'submit'}
                                        disabled={isSubmitting}>Login
                                </button>
                            </div>

                        </Form>
                    )}
                </Formik>
                <div className={loginStyles.cardInfo}>
                    <p>Don't have an account?</p>
                    <a href={'#'}>Sign up</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
