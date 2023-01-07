import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import Login from "../auth/login/Login";
import Error404 from "../error404/Error404";
import Registration from "../auth/registration/Registration";
import Profile from "../profile/Profile";
import TestPage from "../../../n2-features/f0-test/test-page/testPage";
import PasswordRecovery from "../auth/password-recovery/PasswordRecovery";

export const PATH = {
    TEST: '/test-page',
    LOGIN: '/login',
    PASSWORD_RECOVERY: '/password-recovery',
    REGISTRATION: '/a1-registration',
    PROFILE: '/profile'

}

const RoutesFunk = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={() => <Navigate to={PATH.TEST}/>}/>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.TEST} element={<TestPage/>}/>
                <Route path={PATH.PASSWORD_RECOVERY} element={<PasswordRecovery/>}/>
                <Route path={PATH.REGISTRATION} element={<Registration/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={'*'} element={<Error404/>}/>
            </Routes>
        </div>
    );
};

export default RoutesFunk;
