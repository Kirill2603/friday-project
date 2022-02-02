import React from "react";
import {Link, Outlet} from "react-router-dom";

export const Header = () => {
    return (
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/test'>Test</Link></li>
                <li><Link to='/password-recovery'>Password Recovery</Link></li>
                <li><Link to='/new-password'>New Password</Link></li>
                <li><Link to='/registration'>Registration</Link></li>
            </ul>

            <Outlet />

            <footer>2022</footer>

        </div>
    )
}