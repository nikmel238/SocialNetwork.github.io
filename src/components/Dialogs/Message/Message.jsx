
import React from "react";
import {sendNewMessageBodyCreator, updateNewMessageCreator} from "../../../redux/dialogs-reducer";

const Message = (props) => {
    let newMessageBody = props.messagesPage.newMessageBody;
    let messagesElements = props.messagesPage.messages.map(
        m => <div>{m.message}</div>
    );

    let sendMessage = () => {
        props.dispatch(sendNewMessageBodyCreator());
    }

    let updateNewMessageBody = (event) => {
        const body = event.target.value;
        const action = updateNewMessageCreator(body);
        props.dispatch(action);
    }

    return (
        <div>
            <div>
                {messagesElements}
            </div>
            <div>
                <textarea value={newMessageBody} onChange={updateNewMessageBody}></textarea>
            </div>
            <div>
                <button onClick={sendMessage}>Add post</button>
                <button>Remove</button>
            </div>
        </div>


    );
}


export default Message;