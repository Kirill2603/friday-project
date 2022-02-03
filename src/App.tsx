import React from 'react';
import './App.css';
import {Layout} from "./components/layout";
import {Route, Routes} from "react-router-dom";
import {Login} from "./pages/login";
import {Registration} from "./pages/registration";
import {Page404} from "./pages/page404";
import {PasswordRecovery} from "./pages/password-recovery";
import {NewPassword} from "./pages/new-password";
import {Profile} from "./pages/profile";
import {Test} from "./pages/test";
import {Home} from "./pages/home";
import {useDispatch, useSelector} from "react-redux";
import {TestAC} from "./store/app-reducer";
import {AppRootStateType} from "./store/store";
import {CustomButton} from "./custom-components/custom-button";

export const path = {
    home: '/' ,
    login: '/login' ,
    registration: '/registration' ,
    passwordRecovery: '/password-recovery' ,
    newPassword: '/new-password' ,
    profile: '/profile' ,
    test: '/test' ,
}

function App() {

    const dispatch = useDispatch()

    const state = useSelector<AppRootStateType>(state => state.app.test)

    const testReducer = () => {
        setTimeout(() => {dispatch(TestAC("HELLO"))
            console.log(state)}, 2000)

    }

    return (<>
            <Routes>
                <Route path={'/'} element={<Layout />}>
                    <Route index element={<Home/>}/>
                    <Route path={path.login} element={<Login/>}/>
                    <Route path={path.registration} element={<Registration/>}/>
                    <Route path={path.passwordRecovery} element={<PasswordRecovery/>}/>
                    <Route path={path.newPassword} element={<NewPassword/>}/>
                    <Route path={path.profile} element={<Profile/>}/>
                    <Route path={path.test} element={<Test/>}/>
                    <Route path='*' element={<Page404/>}/>
                </Route>
            </Routes>

            <CustomButton onChangeOption={testReducer}>Test</CustomButton>
        </>
    );
}

export default App;
//"homepage": "https://Kirill2603.github.io/friday-project",