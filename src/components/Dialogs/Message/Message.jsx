import React from "react";
import {sendNewMessageBodyCreator, updateNewMessageCreator} from "../../../redux/dialogs-reducer";

const Message = (props) => {
    let newMessageBody = props.newMessageBody;
    let messagesElements = props.messages.map(
        m => <div>{m.message}</div>
    );

    let onSendMessage = () => {
        props.sendMessage();
    }

    let onUpdateNewMessageBody = (event) => {
        const body = event.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div>
            <div>
                {messagesElements}
            </div>
            <div>
                <textarea value={newMessageBody} onChange={onUpdateNewMessageBody}></textarea>
            </div>
            <div>
                <button onClick={onSendMessage}>Add post</button>
                <button>Remove</button>
            </div>
        </div>


    );
}


export default Message;