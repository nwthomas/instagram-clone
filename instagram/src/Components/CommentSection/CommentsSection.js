import React from "react";
import heartIcon from "../../images/heart-icon.svg";
import commentIcon from "../../images/comment-icon.png";
import "./CommentsSection.css";

const CommentsSection = props => {
  return (
    <div className="comments__section">
      <div className="comments__icons">
        <div className="comment__icon heart">
          <img src={heartIcon} alt="Heart icon" />
        </div>
        <div className="comment__icon comment">
          <img src={commentIcon} alt="Comment icon" />
        </div>
      </div>
      <p className="likes">{props.likes}</p>
    </div>
  );
};

export default CommentsSection;
