import React from 'react';
import './Navbar.css'


const NavBar = () => {
    window.addEventListener("scroll", function(){
        let header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY>0)
    })
    return (
        <div>
            <header>
            <a href="#" class="logo">Task</a>
            <ul>
                <li> <a href="#">Node</a> </li>
                <li> <a href="#">React</a> </li>
            </ul>
            </header>
            {/* <section class="banner"></section> */}
        </div>
    );
};

export default NavBar;