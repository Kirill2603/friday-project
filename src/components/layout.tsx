import React from "react";
import {Outlet} from "react-router-dom";
import {Header} from "./header";

export const Layout = () => {
    return (
        <>
            <Header />

            <div style={{border: '2px solid red'}}>
                <Outlet/>
            </div>

            <footer>2022</footer>

        </>
    )
}