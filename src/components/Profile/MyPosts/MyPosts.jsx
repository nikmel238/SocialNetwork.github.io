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
          <Post message="Hi, how are you?" like="15"/>
          <Post message="It's my first post" like="25" />
          <Post />
        </div>
      </div>
  )
}

export default MyPosts;