import React from 'react';
import {Link} from "react-router-dom";
import {PATH} from "../main/MainPage";

const Header = () => {
    return (
        <div>
            <h1>Head</h1>
            <p>
                <span>
                    <Link to={PATH.LOGIN}>Login </Link>
                </span>
                <span>
                    <Link to={PATH.TEST}>Test </Link>
                </span>
                <span>
                    <Link to={PATH.PROFILE}>Profile</Link>
                </span>

            </p>
        </div>
    );
};

export default Header;
