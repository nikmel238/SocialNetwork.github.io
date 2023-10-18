import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <div className={`${classes.dialog} ${classes.active}`}>
                    <NavLink to="/dialogs/1">Dmitriy</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/2">Valeriy</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/3">Marat</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/4">Kolya</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/5">Pavel</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>
                    11111
                </div>
                <div className={classes.message}>
                    22222
                </div>
                <div className={classes.message}>
                    33
                </div>
            </div>
        </div>
    )
}

export default Dialogs;