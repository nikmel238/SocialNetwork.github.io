const SEND_MESSAGE = `SEND-MESSAGE`;
const UPDATE_NEW_MESSAGE_BODY = `UPDATE-NEW-MESSAGE-BODY`;
const dialogsReducer = (state, action) => {

    switch (action.type) {
        case SEND_MESSAGE :
            const newMessage = {
                id: 5,
                message: state.newMessageBody,
            }
            state.messages.push(newMessage);
            state.newMessageBody = ``;
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
        default:
            return state;

    }
}

export const sendNewMessageBodyCreator = () => ({type: SEND_MESSAGE,});

export const updateNewMessageCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, body: text});

export default dialogsReducer;