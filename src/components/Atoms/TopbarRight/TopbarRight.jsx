import React from "react";

const TopbarRight = () => {
    return(
        <div id="right-side">
            <ul>
                <li><a href=""><i id="register" class="fa fa-user text-primary me-2"></i>Register</a></li>
                <li><a href=""><i id="login" class="fa fa-sign-in-alt text-primary me-2"></i>Login</a></li>
                <li id="Topbar-list"><a href=""><i id="dashboard" class="fa fa-home text-primary me-2"></i>My Dashboard <i id="dashboard1" class="fa-solid fa-caret-down"></i></a>
                    <ul id="Topbar-dropdown">
                        <li><a href=""><i class="fa-solid fa-user"></i>  My Profile</a></li>
                        <li><a href=""><i class="fa-solid fa-message"></i>  Inbox</a></li>
                        <li><a href=""><i class="fa-solid fa-bell"></i>  Notifications</a></li>
                        <li><a href=""><i class="fa-sharp fa-solid fa-gear"></i>  Account Setting</a></li>
                        <li><a href=""><i class="fa-solid fa-power-off"></i>  Log Out</a></li>
                    </ul>
                </li>
            </ul>
            
              
        </div>    
    )
}

export default TopbarRight;