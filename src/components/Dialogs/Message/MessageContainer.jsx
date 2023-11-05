import React from "react";
import {sendNewMessageBodyCreator, updateNewMessageCreator} from "../../../redux/dialogs-reducer";
import Message from "./Message";

const MessageContainer = (props) => {

    let sendMessage = () => {
        props.dispatch(sendNewMessageBodyCreator());
    }

    let updateNewMessageBody = (body) => {
        const action = updateNewMessageCreator(body);
        props.dispatch(action);
    }

    return (
        <Message newMessageBody={props.messagesPage.newMessageBody} messages={props.messagesPage.messages} sendMessage={sendMessage} updateNewMessageBody={updateNewMessageBody}/>
    );
}


export default MessageContainer;