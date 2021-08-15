import React, { useState } from "react";
import classes from "./BottomChatBar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button/Button";
import OnlineUsersList from "./OnlineUsersList/OnlineUsersList";
import Chats from "./Chats/Chats";
const BottomChatBar = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const [showingOnlineUsers, setShowingOnlineUsers] = useState(false);
  const [activeChats, setActiveChats] = useState([]); //initialy empty (no chats are open)

  const toggleShowingOnlineUsersHandler = () => {
    setShowingOnlineUsers((prevState) => !prevState);
  };

  const startPrivateChatHandler = (userID) => {
    const users_copy = [...users];
    //Finds the users index in the orignal users array
    const userIndex = users_copy.findIndex((user) => user.id === userID);
    //Finds the users index in the active chats array
    const activeIndex = activeChats.findIndex((user) => user.id === userID);
    //Creates a copy of the user without mutating the original
    const user_copy = { ...users_copy[userIndex] };

    //Creates a copy of the active chats array
    const updatedChats = [...activeChats];
    // If a user is found
    if (activeIndex !== -1) {
      //selects the correct user from the active chats array;
      updatedChats[activeIndex].showingChat = activeChats[activeIndex]
        .showingChat
        ? false
        : true;
    }
    //If a user is not found push the new user object into the active chats array
    else {
      user_copy.activeChat = true;
      user_copy.showingChat = true;
      updatedChats.push(user_copy);
    }

    setActiveChats(updatedChats);
  };

  const endPrivateChatHandler = (userID) => {
    const index = activeChats.findIndex((user) => user.id === userID);

    const updatedChats = [...activeChats];

    updatedChats.splice(index, 1);

    setActiveChats(updatedChats);
  };

  return (
    <div className={classes.BottomChatBar}>
      <div className={classes.Container}>
        <Chats
          startPrivateChatHandler={startPrivateChatHandler}
          endPrivateChatHandler={endPrivateChatHandler}
          activeChats={activeChats}
        />
        <div className={classes.BottomChatBar__FriendsOnline}>
          <h4>Users Online ({users.length})</h4>
          <Button onClick={toggleShowingOnlineUsersHandler}>Click</Button>
          {showingOnlineUsers && (
            <OnlineUsersList
              onlineUsers={users}
              startPrivateChatHandler={startPrivateChatHandler}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default BottomChatBar;
