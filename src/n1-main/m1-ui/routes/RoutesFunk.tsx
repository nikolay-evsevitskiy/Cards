import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import Login from "../../../n2-features/f1-auth/a2-login/Login";
import AddNewPassword from "../add-new-password/AddNewPassword";
import Error404 from "../error404/Error404";
import Registration from "../../../n2-features/f1-auth/a1-registration/Registration";
import Profile from "../profile/Profile";
import TestPage from "../../../n2-features/f0-test/test-page/testPage";

export const PATH = {
    TEST: '/test-page',
    LOGIN: '/a2-login',
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
                <Route path={PATH.PASSWORD_RECOVERY} element={<AddNewPassword/>}/>
                <Route path={PATH.REGISTRATION} element={<Registration/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={'*'} element={<Error404/>}/>
            </Routes>
        </div>
    );
};

export default RoutesFunk;
