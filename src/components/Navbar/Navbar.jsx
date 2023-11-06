import classes from './Navbar.module.css';
import MenuNavbar from "./MenuNavbar/MenuNavbar";
import FriendsBlock from "./FriendsBlock/FriendsBlock";
import StoreContext from "../../StoreContext";
import React from "react";


const Navbar = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                return (
                    <div className={classes.nav}>
                        <MenuNavbar/>
                        <FriendsBlock state={state.messagesPage}/>
                    </div>
                );
            }
            }

        </StoreContext.Consumer>

    )
}

export default Navbar;