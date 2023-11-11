import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {sendNewMessageBodyCreator, updateNewMessageCreator} from "../../redux/dialogs-reducer";


let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        newMessageBody: state.messagesPage.newMessageBody,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (text) => {
            let action = updateNewMessageCreator(text);
            dispatch(action);
        },
        sendMessage: () => {
            dispatch(sendNewMessageBodyCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;