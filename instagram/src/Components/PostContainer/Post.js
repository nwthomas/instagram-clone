import React from "react";
import PropTypes from "prop-types";
import "./PostContainer.css";

const Post = props => {
  return (
    <React.Fragment>
      <div className="post__icon">
        <div className="thumbnail">
          <img src={props.thumbnailUrl} alt="" />
        </div>
        <a href="index.html">{props.username}</a>
      </div>
      <img src={props.imageUrl} alt="" />
    </React.Fragment>
  );
};

Post.prototypes = {
  thumbnailUrl: PropTypes.string,
  username: PropTypes.string,
  imageUrl: PropTypes.string
};

export default Post;
