import React from "react";
import {Link} from "react-router-dom";
import {path} from "../App";

export const Header = () => {
    return (
        <header>
            <ul>
                <li><Link to={path.home}>Home</Link></li>
                <li><Link to={path.profile}>Profile</Link></li>
                <li><Link to={path.login}>Login</Link></li>
                <li><Link to={path.passwordRecovery}>Password Recovery</Link></li>
                <li><Link to={path.newPassword}>New Password</Link></li>
                <li><Link to={path.registration}>Registration</Link></li>
                <li><Link to={path.test}>Test</Link></li>
            </ul>
        </header>
    )
}
