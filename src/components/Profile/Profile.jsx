import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={classes.content}>
        <div>
          <img src="https://s1.1zoom.me/b5050/813/421743-svetik_3840x2400.jpg"></img>
        </div>
      
        <MyPosts />
      </div>
  )
}

export default Profile;