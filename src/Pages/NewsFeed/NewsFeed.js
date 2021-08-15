import React from "react";
import PostFeed from "../../Components/PostFeed/PostFeed";
const NewsFeed = (props) => {
  return <PostFeed hidingComments={props.hidingComments} />;
};

export default NewsFeed;
