import React from "react";

const Post = props => {
  return (
    <React.Fragment>
      <div className="post__icon">
        <img src={props.thumbnailUrl} alt="" />
        <a href="index.html">{props.username}</a>
      </div>
      <img src={props.imageUrl} alt="" />
    </React.Fragment>
  );
};

export default Post;
