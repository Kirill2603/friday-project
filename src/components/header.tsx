import React from "react";
import {Link} from "react-router-dom";
import {PATH} from "../App";

export const Header = () => {
    return (
        <div>
            <ul>
                <li><Link to={PATH.HOME}>Home</Link></li>
                <li><Link to={PATH.PROFILE}>Profile</Link></li>
                <li><Link to={PATH.LOGIN}>Login</Link></li>
                <li><Link to={PATH.TEST}>Test</Link></li>
                <li><Link to={PATH.PASSWORD_RECOVERY}>Password Recovery</Link></li>
                <li><Link to={PATH.NEW_PASSWORD}>New Password</Link></li>
                <li><Link to={PATH.REGISTRATION}>Registration</Link></li>
            </ul>
        </div>
    )
}