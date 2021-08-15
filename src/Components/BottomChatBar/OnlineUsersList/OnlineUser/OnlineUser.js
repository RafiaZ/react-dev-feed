import React from "react";
import classes from "./OnlineUser.module.scss";
import Avatar from "../../../UI/Avatar/Avatar";
const OnlineUser = (props) => {
  const handleClick = (userID) => {
    props.startPrivateChatHandler(userID);
  };

  return (
    <li
      className={classes.OnlineUser}
      onClick={() => {
        handleClick(props.userID);
      }}
    >
      <Avatar
        style={{ width: "50px", height: "50px" }}
        image={props.profileImageURL}
        name={`${props.firstName} ${props.lastName}`}
      />
      <div className={classes.OnlineUser__Status}></div>
    </li>
  );
};

export default OnlineUser;
