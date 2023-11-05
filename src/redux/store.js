import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {

    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._callSubscriber();
    },
}





export default store;
window.store = store;