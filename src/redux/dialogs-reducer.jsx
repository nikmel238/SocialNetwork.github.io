const SEND_MESSAGE = `SEND-MESSAGE`;
const UPDATE_NEW_MESSAGE_BODY = `UPDATE-NEW-MESSAGE-BODY`;

let initialState = {
    dialogs: [
        {
            id: 1,
            name: "Dmitriy",
            logo: "https://sopranoclub.ru/images/memy-na-avu-275-memnyh-avatarok/file56870.jpeg"
        },
        {
            id: 2,
            name: "Valeriy",
            logo: "https://pic.rutubelist.ru/video/46/b2/46b25de0bf3d3fa60a22037e55071354.jpg"
        },
        {
            id: 3,
            name: "Marat",
            logo: "https://pixelbox.ru/wp-content/uploads/2021/11/avatar-whatsapp-pixelbox.ru-36.jpg"
        },
        {
            id: 4,
            name: "Kolya",
            logo: "https://pixelbox.ru/wp-content/uploads/2022/08/avatars-viber-pixelbox.ru-33.jpg"
        },
        {
            id: 5,
            name: "Pavel",
            logo: "https://pixelbox.ru/wp-content/uploads/2022/08/avatar-boy-telegram-pixelbox.ru-88.jpg"
        },
    ],
    messages: [
        {
            id: 1,
            message: "Hello, world!",
        },
        {
            id: 2,
            message: "Hello, Russia!!!",
        },
        {
            id: 3,
            message: "Yo",
        },
        {
            id: 4,
            message: "Balalayka",
        },
    ],
    newMessageBody: `new Message`,
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {

        case SEND_MESSAGE :
            const newMessage = {
                id: 5,
                message: state.newMessageBody,
            }
            return {
                ...state,
                newMessageBody: ``,
                messages: [...state.messages, newMessage],
            };
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        default:
            return state;

    }
}

export const sendNewMessageBodyCreator = () => ({type: SEND_MESSAGE,});

export const updateNewMessageCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, body: text});

export default dialogsReducer;