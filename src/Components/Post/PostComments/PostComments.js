import React, { useRef, useState } from "react";
import PostComment from "./PostComment/PostComment";
import classes from "./PostComments.module.scss";

const PostComments = (props) => {
  const newCommentRef = useRef();
  const comments = [...props.postComments];
  const viewingComments = props.viewingComments;
  const [numComments, setNumComments] = useState(1);

  const setNumCommentsHandler = () => {
    if (numComments > comments.length) {
      return;
    } else {
      setNumComments((prevState) => prevState + 5);
    }
  };

  const scrollToHandler = () => {
    // const yOffset = -50;
    // const element = newCommentRef.current;
    // const y =
    //   element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    newCommentRef.current.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  const hideCommentsHandler = () => {
    setNumComments(1);
  };

  if (!viewingComments) {
    comments.splice(numComments, comments.length - 1);
  }

  return (
    <section className={classes.PostComments}>
      <div ref={newCommentRef} className={classes.New__Comment}>
        <input type="text" placeholder="Write a comment..." />
      </div>

      {comments.map((comment) => {
        return (
          <PostComment
            key={Math.random()}
            author={comment.author}
            content={comment.content}
          />
        );
      })}

      {props.postComments.length > 0 && (
        <div className={classes.PostComments__Actions}>
          {numComments > 5 && <p onClick={scrollToHandler}>Write a comment</p>}
          <div className={classes.Comments__Amount}>
            <p
              onClick={
                numComments <= comments.length
                  ? setNumCommentsHandler
                  : hideCommentsHandler
              }
              className={classes.LoadMore}
            >
              {numComments <= comments.length
                ? "Load more comments."
                : "Hide Comments"}
            </p>

            <p className={classes.Viewing}>
              Viewing {comments.length} of {props.postComments.length} Comments
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default React.memo(PostComments);
