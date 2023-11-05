import React from "react";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState();

    return (
        <Dialogs messagesPage={state.messagesPage} dialogs={state.messagesPage.dialogs} dispatch={props.store.dispatch.bind(props.store)} />
    )
}

export default DialogsContainer;