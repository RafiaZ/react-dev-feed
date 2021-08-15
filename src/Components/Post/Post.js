import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import classes from "./Post.module.scss";
import Avatar from "../UI/Avatar/Avatar";
import PostActions from "./PostActions/PostActions";
import PostData from "./PostData/PostData";
import PostSettings from "./PostSettings/PostSettings";
import PostComments from "./PostComments/PostComments";

const Post = (props) => {
  const [showSettings, setShowSettings] = useState(false);
  const [viewingComments, setViewingComments] = useState(false);

  const setViewingCommentsHandler = () => {
    setViewingComments((prevState) => !prevState);
  };

  const setShowSettingsHandler = () => {
    setShowSettings((prevState) => !prevState);
  };

  return (
    <div className={classes.Post}>
      <div className={classes.Post__Top}>
        <Avatar name={props.author} />
        <FontAwesomeIcon
          className={`${classes.Icon} ${showSettings && classes.Active}`}
          onClick={setShowSettingsHandler}
          icon={faEllipsisH}
        />

        {showSettings && (
          <PostSettings
            showSettings={showSettings}
            setShowSettingsHandler={setShowSettingsHandler}
          />
        )}
      </div>

      <div className={classes.Post__Content}>
        <p
          style={{
            fontFamily: props.content.toLowerCase().includes("```")
              ? "monospace"
              : "",
            background: props.content.toLowerCase().includes("```")
              ? "whitesmoke"
              : "",
          }}
        >
          {props.content.replaceAll("```", "").trim()}
        </p>
      </div>

      <PostData
        likes={props.post.likes}
        postComments={props.post.comments}
        toggleComments={setViewingCommentsHandler}
      />

      <PostActions postID={props.post.id} postLikes={props.post.likes} />

      {!props.hidingComments && (
        <PostComments
          viewingComments={viewingComments}
          postComments={props.post.comments}
        />
      )}
    </div>
  );
};

export default Post;
