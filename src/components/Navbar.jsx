import React from "react";
import TopbarRight from "./Atoms/TopbarRight/TopbarRight";
import TopbarLeft from "./Atoms/TopbarLeft/TopbarLeft";

function Navbar(){
    return (
        <>
            <div id="top-container">
                <TopbarLeft/>
                <TopbarRight/>
            </div>
        </>
    )
}

export default Navbar;