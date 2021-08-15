import React from "react";
import classes from "./Chats.module.scss";
import Chat from "./Chat/Chat";
import { useDispatch } from "react-redux";
const Chats = (props) => {
  return (
    <ul className={classes.Chats}>
      {props.activeChats.length > 0 &&
        props.activeChats
          .map((user) => (
            <Chat
              key={user.id}
              startPrivateChatHandler={props.startPrivateChatHandler}
              endPrivateChatHandler={props.endPrivateChatHandler}
              firstName={user.userData.firstName}
              lastName={user.userData.lastName}
              chatOpen={user.showingChat}
              userID={user.id}
            />
          ))
          .slice(0, 3)}
      {props.activeChats.length > 3 && (
        <div className={classes.OverFlow}>
          <span>+{props.activeChats.length - 3}</span>
        </div>
      )}
    </ul>
  );
};

export default Chats;
