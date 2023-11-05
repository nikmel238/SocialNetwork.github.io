import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import MessageContainer from "./Message/MessageContainer";

const Dialogs = (props) => {


    let dialogsElements = props.dialogs.map(
        d => <DialogItem id={d.id} name={d.name} logo={d.logo}/>
    );


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}><MessageContainer messagesPage={props.messagesPage} dispatch={props.dispatch}/></div>
        </div>
    )
}

export default Dialogs;