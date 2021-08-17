import React, { useState } from "react";
import classes from "./NewPostModal.module.scss";
import Modal from "../../UI/Modal/Modal";
import { useDispatch } from "react-redux";

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
    <Modal
      show={props.isWritingPost}
      header="New Post"
      onClick={props.toggleIsWritingPostHandler}
      clearInput={() => {
        setNewPostContent("");
      }}
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
  );
};

export default NewPostModal;
