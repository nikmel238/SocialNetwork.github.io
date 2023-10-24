import React from "react";
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {updateNewPostText} from "../../../redux/state";

const MyPosts = (props) => {


    let postsElements = props.posts.map(
        p => <Post message={p.message} likeCounts={p.likeCount}/>
    );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();

    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (

        <div className={classes.postsBlock}>
            <div>
                <h3>My post</h3>
                <div>
                    <div>New Post</div>
                    <div>
                        <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
                        <button>Remove</button>
                    </div>
                </div>

            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;