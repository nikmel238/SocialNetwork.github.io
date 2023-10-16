import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={classes.content}>
        <div>
          My post
          
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
          <Post />
          <Post />
          <Post />
        </div>
      </div>
  )
}

export default MyPosts;