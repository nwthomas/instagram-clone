import React from "react";
import heartIcon from "../../images/heart-icon.svg";
import commentIcon from "../../images/comment-icon.png";
import Comment from "./Comment";
import PropTypes from "prop-types";
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
      <p className="likes">{props.likes} likes</p>
      <div className="comments__container">
        {props.comments.map((comment, index) => (
          <Comment
            username={comment.username}
            text={comment.text}
            key={"comment" + index}
          />
        ))}
      </div>
      <p className="post__timestamp">{props.timestamp}</p>
      <input
        type="text"
        className="comment__input"
        name="inputText"
        placeholder="Add a comment..."
      />
    </div>
  );
};

CommentsSection.propTypes = {
  username: PropTypes.string,
  timestamp: PropTypes.string,
  text: PropTypes.string,
  likes: PropTypes.number
};

export default CommentsSection;
