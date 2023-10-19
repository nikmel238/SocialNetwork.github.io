import classes from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const linkPress = ({isActive}) => isActive ? classes.active : classes.dialog;

    return (
        <div>
            <NavLink className={linkPress} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
}


export default DialogItem;