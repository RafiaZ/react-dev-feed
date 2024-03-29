import React from "react";
import classes from "./Chat.module.scss";
import Avatar from "../../../UI/Avatar/Avatar";
import CloseBtn from "../../../UI/CloseBtn/CloseBtn";
import { Link } from "react-router-dom";

import Button from "../../../UI/Button/Button";
const Chat = (props) => {
  return (
    <li className={classes.Chat}>
      <Avatar
        style={{ width: "40px", height: "40px" }}
        image={props.profileImageURL}
        name={`${props.firstName} ${props.lastName}`}
        onClick={() => {
          props.startPrivateChatHandler(props.userID);
        }}
      />
      <CloseBtn
        onClick={() => {
          props.endPrivateChatHandler(props.userID);
        }}
      />

      {props.chatOpen && (
        <div className={classes.Message__Box}>
          <div className={classes.Top}>
            <div className={classes.Avatar}>
              <Avatar
                style={{ width: "50px", height: "50px" }}
                image={props.profileImageURL}
              />
              <Link
                className={classes.ProfileLink}
                to={`/users/account/${props.userID.replace(" ", "-")}`}
              >
                <p>{`${props.firstName} ${props.lastName}`}</p>
              </Link>
            </div>
            <div className={classes.Buttons}>
              <Button
                onClick={() => {
                  props.startPrivateChatHandler(props.userID);
                }}
              >
                -
              </Button>
              <CloseBtn onClick={props.endPrivateChatHandler} />
            </div>
          </div>
          <ul>
            <li style={{ textAlign: "left" }}>
              <h4>{props.firstName}</h4>
              <p>
                Hi Adam! <span className={classes.SentAt}>15/08/2021</span>
              </p>
            </li>
            <li style={{ textAlign: "right" }}>
              <h4>Me</h4>
              <p>
                Hi {props.firstName} How are you?{" "}
                <span className={classes.SentAt__Left}>16/08/2021</span>
              </p>
            </li>
            <li style={{ textAlign: "left" }}>
              <h4>{props.firstName}</h4>
              <p>Hi Adam!</p>
            </li>
            <li style={{ textAlign: "right" }}>
              <h4>Me</h4>
              <p>Hi {props.firstName} How are you?</p>
            </li>
            <li style={{ textAlign: "left" }}>
              <h4>{props.firstName}</h4>
              <p>Hi Adam!</p>
            </li>
            <li style={{ textAlign: "right" }}>
              <h4>Me</h4>
              <p>Hi {props.firstName} How are you?</p>
            </li>
          </ul>
          <input
            className={classes.Pmsg__Input}
            type="text"
            placeholder="Write a message"
          ></input>
        </div>
      )}
    </li>
  );
};

export default Chat;
