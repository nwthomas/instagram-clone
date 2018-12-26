import React from "react";
import "./CommentsSection.css";

const Comment = props => {
  return (
    <div className="user__comment">
      <a href="index.html">{props.username}</a>
      <p>{props.text}</p>
    </div>
  );
};

export default Comment;
