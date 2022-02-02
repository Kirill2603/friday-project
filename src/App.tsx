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


function App() {
    return (<>
            <Routes>
                <Route path={'/'} element={<Header />}>
                    <Route index element={<Login/>}/>
                    <Route path='login' element={<Login/>}/>
                    <Route path='registration' element={<Registration/>}/>
                    <Route path='password-recovery' element={<PasswordRecovery/>}/>
                    <Route path='new-password' element={<NewPassword/>}/>
                    <Route path='profile' element={<Profile/>}/>
                    <Route path='test' element={<Test/>}/>
                    <Route path='*' element={<Page404/>}/>
                </Route>
            </Routes>

        </>
    );
}

export default App;
//"homepage": "https://Kirill2603.github.io/friday-project",