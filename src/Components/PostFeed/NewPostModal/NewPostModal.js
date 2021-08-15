import React, { useRef, useState } from "react";
import classes from "./NewPostModal.module.scss";
import Transition from "react-transition-group/Transition";
import Modal from "../../UI/Modal/Modal";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faImage,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import { post_Actions } from "../../../Store/Post-Slice";
import Button from "../../UI/Button/Button";
import AddToPost from "./AddToPost";
import PostContentCount from "./PostContentCount";
const NewPostModal = (props) => {
  const dispatch = useDispatch();
  const [newPostContent, setNewPostContent] = useState("");

  const onNewPostContentChangeHandler = (e) => {
    setNewPostContent(e.target.value);
  };

  const submitNewPostHandler = (e) => {
    e.preventDefault();
    dispatch(post_Actions.addPost({ content: newPostContent }));
    setNewPostContent("");
    props.toggleIsWritingPostHandler();
  };

  return (
    <Transition
      in={props.isWritingPost}
      timeout={500}
      mountOnEnter
      unmountOnExit
    >
      {(state) => (
        <Modal
          header="New Post"
          onClick={props.toggleIsWritingPostHandler}
          clearInput={() => {
            setNewPostContent("");
          }}
          show={state}
          className={classes.NewPostModal}
        >
          <form onSubmit={submitNewPostHandler}>
            <div
              onClick={(e) => {
                console.log(e.target.selectionEnd);
              }}
              className={classes.NewPostModal__Content}
            >
              <textarea
                value={newPostContent}
                onChange={onNewPostContentChangeHandler}
                placeholder="Write your comment..."
              ></textarea>
            </div>

            <AddToPost />

            <PostContentCount newPostContent={newPostContent} />

            <Button
              disabled={newPostContent.length <= 0}
              className={classes.Post__Button}
              type="submit"
            >
              Post
            </Button>
          </form>
        </Modal>
      )}
    </Transition>
  );
};

export default NewPostModal;
