import classes from './Dialogs.module.css';

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogs, messages} from "./../../index"

const Dialogs = () => {





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