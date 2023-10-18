import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={`${classes.dialog} ${classes.active}`}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    );
}
const Dialogs = () => {

    let dialogs = [
        {
            id: 1,
            name: "Dmitriy",
        },
        {
            id: 2,
            name: "Valeriy",
        },
        {
            id: 3,
            name: "Marat",
        },
        {
            id: 4,
            name: "Kolya",
        },
        {
            id: 5,
            name: "Pavel",
        },
    ]

    let messages = [
        {
            id: 1,
            message: "Hello, world!",
        },
        {
            id: 2,
            message: "Hello, Russia!!!",
        },
        {
            id: 3,
            message: "Yo",
        },
        {
            id: 4,
            message: "Balalayka",
        },
    ]

    let dialogsElements = dialogs.map(
        d => <DialogItem id={d.id} name={d.name}/>
    );

    let messagesElements = messages.map(
        m => <Message message={m.message}/>
    );

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;