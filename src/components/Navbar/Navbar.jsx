import classes from './Navbar.module.css';
import MenuNavbar from "./MenuNavbar/MenuNavbar";
import React from "react";
import FriendsBlockContainer from "./FriendsBlock/FriendsBlockContainer";


const Navbar = (props) => {

    return (
        <div className={classes.nav}>
            <MenuNavbar/>
            <FriendsBlockContainer/>
        </div>
    );
}

export default Navbar;