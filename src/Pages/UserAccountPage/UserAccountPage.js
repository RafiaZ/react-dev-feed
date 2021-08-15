import React from "react";
import classes from "./UserAccountPage.module.scss";
import { useSelector } from "react-redux";
import CoverImage from "../../Components/UI/CoverImage/CoverImage";
import Avatar from "../../Components/UI/Avatar/Avatar";
import ProfileData from "../../Components/UI/ProfileData/ProfileData";
import Languages from "../../Components/Languages/Languages";
import { useParams } from "react-router-dom";
const UserAccountPage = (props) => {
  const users = useSelector((state) => state.users.users);

  const params = useParams();

  const { userID } = params;

  const user = users.find((u) => u.id.replace(" ", "-") === userID);

  return (
    <div className={classes.ProfilePage}>
      <div className={classes.ProfilePage__ProfileData}>
        <CoverImage />
        <section className={classes.Profile__Top__Container}>
          <div className={classes.Profile__Top__Data}>
            <div className={classes.Profile__Top__Data__Left}>
              <Avatar className={classes.Avatar__Image} />
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

export default UserAccountPage;
