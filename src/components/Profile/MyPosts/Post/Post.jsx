import classes from './Post.module.css';

const Post = (props) => {
  return (
          <div className={classes.item}>
            <div>
              <img src="https://shapka-youtube.ru/wp-content/uploads/2020/08/man-silhouette.jpg" alt='avatar'/>
            </div>
            <div>{props.message}</div>
            <span>
              <span>{props.like}</span>
              <button>Like</button>
            </span>
          </div>
  )
}

export default Post;