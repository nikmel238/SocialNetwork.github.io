import classes from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const setActive = ({isActive}) => isActive ? classes.active : classes.dialog;

    return (
        <div className={classes.dialogItem}>
            <NavLink className={setActive} to={`/dialogs/${props.id}`}>
                <div><img src={props.logo} alt={"avatarka"}/></div>
                <div>{props.name}</div>
            </NavLink>
        </div>
    );
}


export default DialogItem;