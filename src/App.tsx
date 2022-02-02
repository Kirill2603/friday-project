import React from 'react';
import './App.css';
import {Header} from "./components/header";
import {Route, Routes} from "react-router-dom";
import {Login} from "./routes/login";
import {Registration} from "./routes/registration";
import {Page404} from "./routes/page404";
import {PasswordRecovery} from "./routes/password-recovery";
import {NewPassword} from "./routes/new-password";
import {Profile} from "./routes/profile";
import {Test} from "./routes/test";


const prjName = '/friday-project'
export const PATH = {
    HOME: prjName + '/',
    LOGIN:  prjName + '/login',
    REGISTRATION: prjName +  '/registration',
    NEW_PASSWORD: prjName +  '/new-password',
    PASSWORD_RECOVERY:  prjName + '/password-recovery',
    PROFILE:  prjName +  '/profile',
    TEST:  prjName + '/test',
}

function App() {
    return (<>
            <Header/>

                <Routes>
                    <Route path={PATH.HOME} element={<Login/>}/>
                    <Route path={PATH.LOGIN} element={<Login/>}/>
                    <Route path={PATH.REGISTRATION} element={<Registration/>}/>
                    <Route path={PATH.PASSWORD_RECOVERY} element={<PasswordRecovery/>}/>
                    <Route path={PATH.NEW_PASSWORD} element={<NewPassword/>}/>
                    <Route path={PATH.PROFILE} element={<Profile/>}/>
                    <Route path={PATH.TEST} element={<Test/>}/>
                    <Route path='*' element={<Page404/>}/>
                </Routes>

        </>
    );
}

export default App;
//"homepage": "https://Kirill2603.github.io/friday-project",