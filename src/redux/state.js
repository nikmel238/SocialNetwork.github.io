import {renderEntireTree} from "../render";

let state = {
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
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0,
    };
    state.profilePage.newPostText = ``;
    state.profilePage.posts.push(newPost);

    renderEntireTree(state);
}

export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}


export default state;