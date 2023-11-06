import React from "react";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {

    // let state = props.store.getState();

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                return <Dialogs messagesPage={state.messagesPage} dialogs={state.messagesPage.dialogs}
                                dispatch={store.dispatch.bind(props.store)}/>;
            }
            }

        </StoreContext.Consumer>

    )
}

export default DialogsContainer;