import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const setActive = ({isActive}) => isActive ? classes.active : classes.item;

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div>
                <NavLink to="/profile" className={setActive}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" className={setActive}>Message</NavLink>
            </div>
            <div>
                <NavLink to="/news" className={setActive}>News</NavLink>
            </div>
            <div>
                <NavLink to="/music" className={setActive}>Music</NavLink>
            </div>
            <div>
                <NavLink to="/settings" className={setActive}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;