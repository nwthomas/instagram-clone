import React from "react";

const Comment = props => {
  return (
    <div className="comment">
      <a href="index.html">{props.username}</a>
      <p className="comment">{props.comment}</p>
    </div>
  );
};

export default Comment;
