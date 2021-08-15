import React from "react";
import { useSelector } from "react-redux";
import Avatar from "../../Components/UI/Avatar/Avatar";
import classes from "./ProfilePage.module.scss";

/* 



THIS IS JUST A MOCK UP PAGE FOR NOW
NEEDS WORK



*/

const ProfilePage = (props) => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className={classes.ProfilePage}>
      <div className={classes.ProfilePage__ProfileData}>
        <section className={classes.CoverImage}>
          <label htmlFor="coverImage">Upload an image</label>
          <input type="file" id="coverImage" hidden />
        </section>
        <section className={classes.Avatar}>
          <div className={classes.Avatar__Container}>
            <Avatar className={classes.Avatar__Image} />
            <div className={classes.Data}>
              <p>{`${user.userData.firstName} ${user.userData.lastName}`}</p>
              <p className={classes.FriendsAmount}>233 Connections</p>
              <div className={classes.Friends}>
                <Avatar className={classes.Friend} />
                <Avatar className={classes.Friend} />
                <Avatar className={classes.Friend} />
                <Avatar className={classes.Friend} />
              </div>
            </div>
          </div>
          <div className={classes.Languages}>
            {user.userData.toolbox.map((tool) => {
              return (
                <div className={classes.Language}>
                  <p>{tool.label}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfilePage;
