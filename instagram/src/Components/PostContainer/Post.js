import React from "react";

const Post = props => {
  return (
    <React.Fragment>
      <div className="post__icon">
        <img src={props.thumbnail} alt="Profile picture thumbnail" />
        <a href="#">{props.username}</a>
      </div>
      <img src={props.imageURL} alt="Placeholder" />
    </React.Fragment>
  );
};

export default Post;
