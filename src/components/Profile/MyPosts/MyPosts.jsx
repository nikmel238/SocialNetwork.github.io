import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
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