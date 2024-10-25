import React from "react";

const ListItems =() => {
    return(
        <div>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Blogs</a></li>
                <li id="dropdown"><a href="">Pages <i class="fa-solid fa-caret-down"></i></a>
                    <ul id="dropdown-list">
                        <li><a href="">Our Features</a></li>
                        <li><a href="">Our Team</a></li>
                        <li><a href="">Testimonal</a></li>
                        <li><a href="">Our Offers</a></li>
                    </ul>
                </li>
                <li><a href="">Contact us</a></li>
            </ul>
        </div>
    )
}

export default ListItems