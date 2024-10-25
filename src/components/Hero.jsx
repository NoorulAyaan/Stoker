import React, { useState, useEffect } from "react";
import Submit from "./Atoms/Submit/Submit";
import ListItems from "./Atoms/Lists/ListItems";
import Logo from "../Assets/Icons/Logo";

function Hero() {
    return (
        <>
            <div id="container">
                {/* Dynamically add the 'sticky' class if the navbar is sticky */}
                <nav id="navbar">
                    <div id="logo-container">
                        <Logo />
                    </div>
                    <div id="lists-side">
                        <ListItems />
                        <Submit />
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Hero;
