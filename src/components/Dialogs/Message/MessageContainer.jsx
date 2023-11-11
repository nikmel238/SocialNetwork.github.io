import React from "react";
import {sendNewMessageBodyCreator, updateNewMessageCreator} from "../../../redux/dialogs-reducer";
import Message from "./Message";

const MessageContainer = (props) => {

    return (
        <Message newMessageBody={props.newMessageBody} messages={props.messages} sendMessage={props.sendMessage} updateNewMessageBody={props.updateNewMessageBody}/>
    );
}


export default MessageContainer;