const ADD_POST = `ADD-POST`;
const UPDATE_NEW_POST_TEXT = `UPDATE-NEW-POST-TEXT`;

let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: "Hi, how are you?",
                    likeCount: 15,
                },
                {
                    id: 2,
                    message: "It's my first post",
                    likeCount: 25,
                },
                {
                    id: 3,
                    message: "RUSSIA",
                    likeCount: 2,
                },
                {
                    id: 4,
                    message: "STRIKE",
                    likeCount: 22,
                },
            ],
            newPostText: `it-kamasutra`,
        },
        messagesPage: {
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
        },
        navbar: {
            menu: ["Profile", "Message", "News", "Music", "Settings"],

        }
    },
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0,
            };
            this._state.profilePage.newPostText = ``;
            this._state.profilePage.posts.push(newPost);

            this._callSubscriber();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        }
    },
}
export const addPostActionCreator = () => ({type: ADD_POST,})

export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text,})

export default store;
window.store = store;