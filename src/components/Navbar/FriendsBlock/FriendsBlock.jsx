import classes from "./FriendsBlock.module.css";
import {NavLink} from "react-router-dom";

const FriendsBlock = (props) => {
    const setActive = ({isActive}) => isActive ? classes.active : classes.item;
    return (
        <div className={classes.friendBlock}>
            <div>FRIENDS</div>
            <div className={classes.friend}>
                <NavLink className={setActive} to={`/dialogs/${props.dialogs[0].id}`}>
                    <div><img src={props.dialogs[0].logo} alt={"logo"}/></div>
                    <div>{props.dialogs[0].name}</div>
                </NavLink>
                <NavLink className={setActive} to={`/dialogs/${props.dialogs[1].id}`}>
                    <div><img src={props.dialogs[1].logo} alt={"logo"}/></div>
                    <div>{props.dialogs[1].name}</div>
                </NavLink>
                <NavLink className={setActive} to={`/dialogs/${props.dialogs[2].id}`}>
                    <div><img src={props.dialogs[2].logo} alt={"logo"}/></div>
                    <div>{props.dialogs[2].name}</div>
                </NavLink>
            </div>
        </div>
    )
}
export default FriendsBlock;