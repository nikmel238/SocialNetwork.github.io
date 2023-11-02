import classes from './Dialogs.module.css';

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {


    let dialogsElements = props.store.getState().messagesPage.dialogs.map(
        d => <DialogItem id={d.id} name={d.name} logo={d.logo}/>
    );


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}><Message messagesPage={props.store.getState().messagesPage} dispatch={props.store.dispatch.bind(props.store)}/></div>
        </div>
    )
}

export default Dialogs;