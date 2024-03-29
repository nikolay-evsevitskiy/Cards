import React from 'react';
import {Link} from "react-router-dom";
import {PATH} from "../routes/RoutesFunk";

const Header = () => {
    return (
        <div>
            <h1>Head</h1>
            <p>
                 <span>
                    <Link to={PATH.PROFILE}>Profile</Link>
                </span>
                <span>
                    <Link to={PATH.LOGIN}>Login </Link>
                </span>
                <span>
                    <Link to={PATH.REGISTRATION}>Registration</Link>
                </span>
                <span>
                    <Link to={PATH.PASSWORD_RECOVERY}>Password recovery</Link>
                </span>
                <span>
                    <Link to={PATH.CHECK_EMAIL}>Check email</Link>
                </span>
                <span>
                    <Link to={PATH.CREATE_NEW_PASSWORD}>Create new password</Link>
                </span>
                <span>
                    <Link to={'/error'}>Error 404</Link>
                </span>
            </p>
        </div>
    );
};

export default Header;
