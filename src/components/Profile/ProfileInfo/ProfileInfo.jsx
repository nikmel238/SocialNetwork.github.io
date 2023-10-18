import classes from "./ProfileInfo.module.css";
const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://s1.1zoom.me/b5050/813/421743-svetik_3840x2400.jpg" alt={`Big img`}></img>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;