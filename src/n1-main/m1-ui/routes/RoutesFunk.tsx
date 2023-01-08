import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import Login from "../auth/login/Login";
import Error404 from "../error404/Error404";
import Registration from "../auth/registration/Registration";
import Profile from "../profile/Profile";
import PasswordRecovery from "../auth/password-recovery/PasswordRecovery";
import CheckEmail from "../auth/check-email/CheckEmail";
import AddNewPassword from "../auth/add-new-password/AddNewPassword";

export const PATH = {
    LOGIN: '/login',
    PASSWORD_RECOVERY: '/password-recovery',
    REGISTRATION: '/a1-registration',
    PROFILE: '/profile',
    CHECK_EMAIL: '/check-email',
    CREATE_NEW_PASSWORD: '/create-new-password',
}

const RoutesFunk = () => {
    return (
        <div>
            <Routes>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.PASSWORD_RECOVERY} element={<PasswordRecovery/>}/>
                <Route path={PATH.REGISTRATION} element={<Registration/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.CHECK_EMAIL} element={<CheckEmail/>}/>
                <Route path={PATH.CREATE_NEW_PASSWORD} element={<AddNewPassword/>}/>
                <Route path={'*'} element={<Error404/>}/>
            </Routes>
        </div>
    );
};

export default RoutesFunk;
