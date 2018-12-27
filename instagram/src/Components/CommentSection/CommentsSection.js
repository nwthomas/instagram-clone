import React from "react";
import commentIcon from "../../images/comment-icon.png";
import Comment from "./Comment";
import PropTypes from "prop-types";
import "./_CommentsSection.scss";

const CommentsSection = props => {
  return (
    <div className="comments__section">
      <div className="comments__icons">
        <div className="comment__icon heart">
          <svg xmlns="http://www.w3.org/2000/svg">
            <g>
              <title>Layer 1</title>
              <path
                id={props.isClicked === true ? "svg_3" : null}
                onClick={props.heartClick}
                d="m100,91.5c0,1 -39,60 -39,59.5c0,0.5 27,115.5 27,115c0,0.5 101,123.5 101,123c0,0.5 68,51.5 68,51c0,0.5 162,-154.5 162,-155c0,0.5 31,-119.5 31,-120c0,0.5 -25,-67.5 -25,-68c0,0.5 -74,-28.5 -74,-29c0,0.5 -63,19.5 -63,19c0,0.5 -28,34.5 -28,34c0,0.5 -40,-31.5 -40,-32c0,0.5 -61,-21.5 -61,-22c0,0.5 -59,23.5 -59,24.5z"
                stroke-opacity="null"
                stroke-width="null"
                stroke="null"
                fill="#ffffff"
              />
              <path
                id="svg_1"
                d="m352,56l-1,0c-39.7,0 -74.8,21 -95,52c-20.2,-31 -55.3,-52 -95,-52l-1,0c-61.9,0.6 -112,50.9 -112,113c0,37 16.2,89.5 47.8,132.7c60.2,82.3 160.2,154.3 160.2,154.3s100,-72 160.2,-154.3c31.6,-43.2 47.8,-95.7 47.8,-132.7c0,-62.1 -50.1,-112.4 -112,-113zm41.6,229.2c-42.6,58.3 -107.5,112.1 -137.6,135.6c-30.1,-23.5 -95,-77.4 -137.6,-135.7c-29.3,-40 -42.4,-87.1 -42.4,-116.1c0,-22.6 8.8,-43.8 24.6,-59.8c15.9,-16 37,-24.9 59.6,-25.1l0.9,0c14.3,0 28.5,3.7 41.1,10.8c12.2,6.9 22.8,16.7 30.4,28.5c5.2,7.9 14,12.7 23.5,12.7s18.3,-4.8 23.5,-12.7c7.7,-11.8 18.2,-21.6 30.4,-28.5c12.6,-7.1 26.8,-10.8 41.1,-10.8l0.9,0c22.5,0.2 43.7,9.1 59.6,25.1c15.9,16 24.6,37.3 24.6,59.8c-0.2,29 -13.3,76.1 -42.6,116.2z"
              />
            </g>
          </svg>
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
