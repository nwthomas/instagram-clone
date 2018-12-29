import React from "react";
import commentIcon from "../../images/comment-icon.png";
import Comment from "./Comment";
import heartRed from "../../images/heart-icon--red.svg";
import heartWhite from "../../images/heart-icon--white.svg";
import ellipses from "../../images/ellipses.svg";
import PropTypes from "prop-types";
import "./_CommentsSection.scss";

const CommentsSection = props => {
  return (
    <div className="comments__section">
      <div className="comments__icons">
        <div className="comment__icon heart">
          <img
            name={props.index}
            onClick={props.heartClick}
            src={props.userLiked[props.index] ? heartRed : heartWhite}
            alt="Heart icon"
          />
        </div>
        <div className="comment__icon comment">
          <img
            onClick={props.selectCommentInput}
            name={props.index}
            src={commentIcon}
            alt="Comment icon"
          />
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
      <div className="comment__box">
        <form onSubmit={props.addNewComment}>
          <input
            onChange={props.postComment}
            id={props.index}
            value={props.inputText[props.index]}
            type="text"
            className="comment__input"
            name="inputText"
            placeholder="Add a comment..."
          />
        </form>
        <img src={ellipses} alt="Ellipses" />
      </div>
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
