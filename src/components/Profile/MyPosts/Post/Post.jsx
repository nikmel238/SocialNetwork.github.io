import classes from './Post.module.css';

const Post = () => {
  return (
          <div className={classes.item}>
            <div>
              <img src="https://shapka-youtube.ru/wp-content/uploads/2020/08/man-silhouette.jpg" alt='avatar'/>
            </div>
            <div>TEXT 1</div>
            <div><button>Like</button></div>
          </div>
  )
}

export default Post;