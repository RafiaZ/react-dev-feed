import React from "react";
import classes from "./ProfileData.module.scss";
import Avatar from "../Avatar/Avatar";
const ProfileData = (props) => {
  const { user } = props;
  return (
    <div className={classes.ProfileData}>
      <p>{`${user.userData.firstName} ${user.userData.lastName}`}</p>
      <p className={classes.FriendsAmount}>233 Connections</p>
      <div className={classes.Friends}>
        <Avatar className={classes.Friend} />
        <Avatar className={classes.Friend} />
        <Avatar className={classes.Friend} />
        <Avatar className={classes.Friend} />
      </div>
    </div>
  );
};

export default ProfileData;
