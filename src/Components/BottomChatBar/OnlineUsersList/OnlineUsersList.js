import React from "react";
import OnlineUser from "./OnlineUser/OnlineUser";
import classes from "./OnlineUsersList.module.scss";

const OnlineUsersList = (props) => {
  return (
    <ul className={classes.OnlineUsersList}>
      {props.onlineUsers.map((user) => (
        <OnlineUser
          key={user.id}
          startPrivateChatHandler={props.startPrivateChatHandler}
          firstName={user.userData.firstName}
          lastName={user.userData.lastName}
          profileImageURL={user.userData.profileImageURL}
          userID={user.id}
        />
      ))}
    </ul>
  );
};

export default OnlineUsersList;
