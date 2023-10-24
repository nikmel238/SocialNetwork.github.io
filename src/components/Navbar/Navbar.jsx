import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Profile from "../Profile/Profile";
import MenuNavbar from "./MenuNavbar/MenuNavbar";
import FriendsBlock from "./FriendsBlock/FriendsBlock";



const Navbar = (props) => {
    return (
        <div className={classes.nav}>
            <MenuNavbar/>
            <FriendsBlock state={props.state}/>
        </div>
    )
}

export default Navbar;