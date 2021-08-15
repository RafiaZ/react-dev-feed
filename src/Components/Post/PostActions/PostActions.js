import React from "react";
import classes from "./PostActions.module.scss";
import Button from "../../UI/Button/Button";

import {
  faComment,
  faThumbsUp,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { post_Actions } from "../../../Store/Post-Slice";

const PostActions = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const POST_ACTIONS = [
    {
      action: "Like",
      icon: faThumbsUp,
      userHasLiked: props.postLikes.find((p) => p === user.id),
      handleClick: () => {
        dispatch(
          post_Actions.likePost({ postID: props.postID, userID: user.id })
        );
      },
    },
    {
      action: "Comment",
      icon: faComment,
      handleClick: () => {
        console.log("Clicked Comment");
      },
    },
    {
      action: "Share",
      icon: faShare,
      handleClick: () => {
        console.log("Clicked Share");
      },
    },
  ];

  return (
    <section className={classes.Post__Actions}>
      <ul className={classes.Post__Actions__List}>
        {POST_ACTIONS.map((action) => (
          <li key={action.action}>
            <Button
              className={
                action.userHasLiked && action.userHasLiked
                  ? classes.Liked
                  : null
              }
              onClick={action.handleClick}
            >
              <FontAwesomeIcon className={classes.Icon} icon={action.icon} />
              {action.action}
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PostActions;
