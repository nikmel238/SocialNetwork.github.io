import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let dialogs = [
    {
        id: 1,
        name: "Dmitriy",
    },
    {
        id: 2,
        name: "Valeriy",
    },
    {
        id: 3,
        name: "Marat",
    },
    {
        id: 4,
        name: "Kolya",
    },
    {
        id: 5,
        name: "Pavel",
    },
]
let messages = [
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
]
let posts = [
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
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export {dialogs, messages, posts};