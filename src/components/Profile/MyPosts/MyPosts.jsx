import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {posts} from "./../../../index"
const MyPosts = () => {


    let postsElements = posts.map(
        p => <Post  message={p.message} likeCounts={p.likeCount} />
    );

    return (

        <div className={classes.postsBlock}>
            <div>
                <h3>My post</h3>
                <div>
                    <div>New Post</div>
                    <div><textarea></textarea></div>
                    <div>
                        <button>Add post</button>
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