import React from "react";
import { useSelector } from "react-redux";
import Languages from "../../Components/Languages/Languages";
import Avatar from "../../Components/UI/Avatar/Avatar";
import CoverImage from "../../Components/UI/CoverImage/CoverImage";
import ProfileData from "../../Components/UI/ProfileData/ProfileData";
import classes from "./ProfilePage.module.scss";

const ProfilePage = (props) => {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className={classes.ProfilePage}>
      <div className={classes.ProfilePage__ProfileData}>
        <CoverImage image={user.userData.coverImageURL} />
        <section className={classes.Profile__Top__Container}>
          <div className={classes.Profile__Top__Data}>
            <div className={classes.Profile__Top__Data__Left}>
              <Avatar
                style={{ width: "160px", height: "160px" }}
                image={user.userData.profileImageURL}
                className={classes.Avatar__Image}
              />
              <ProfileData user={user} />
            </div>
            <div className={classes.Profile__Top__Data__Right}>
              <p>{user.userData.reputation} Reputation Points</p>
              <p>{user.userData.likes.length} Liked Posts</p>
              <p>{user.userData.comments} Comments</p>
            </div>
          </div>
          <Languages user={user} />
        </section>
      </div>
    </div>
  );
};

export default ProfilePage;
