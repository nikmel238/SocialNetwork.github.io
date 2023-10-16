import classes from './Profile.module.css';

const Profile = () => {
  return (
    <div className={classes.content}>
        <div>
          <img src="https://s1.1zoom.me/b5050/813/421743-svetik_3840x2400.jpg"></img>
        </div>
        <div>
          <img src="https://pixelbox.ru/wp-content/uploads/2022/03/lol-avatars-pixelbox.ru-52.jpg"></img>
        </div>
        <div>
          My post
          <div>New Post</div>
        </div>
        <div className={classes.posts}>
          <div className={classes.item}>post 1</div>
          <div className={classes.item}>post 2</div>
        </div>
      </div>
  )
}

export default Profile;