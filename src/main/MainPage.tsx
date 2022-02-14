import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import Login from "../login/Login";
import AddNewPassword from "../add-new-password/AddNewPassword";
import Error404 from "../error404/Error404";
import Registration from "../registration/Registration";
import Profile from "../profile/Profile";
import TestPage from "../test-page/testPage";

export const PATH = {
    TEST: '/test-page',
    LOGIN: '/login',
    PASSWORD_RECOVERY: '/password-recovery',
    REGISTRATION: '/registration',
    PROFILE: '/profile'

}

const MainPage = () => {
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

export default MainPage;
