import React, { Fragment } from "react";
import Post from "./Post";
import CommentsSection from "../CommentSection/CommentsSection";
import PropTypes from "prop-types";
import "./_Post.scss";

const PostContainer = props => {
  return (
    <div className="post__container">
      {props.dummyDataOnProps.map((post, index) => (
        <Fragment key={"fragment" + index}>
          <Post
            username={post.username}
            thumbnailUrl={post.thumbnailUrl}
            imageUrl={post.imageUrl}
            key={"post" + index}
          />
          <CommentsSection
            isClicked={props.isClicked}
            heartClick={props.heartClick}
            likes={post.likes}
            username={post.username}
            comments={post.comments}
            timestamp={post.timestamp}
            key={"comments" + index}
          />
        </Fragment>
      ))}
    </div>
  );
};

PostContainer.propTypes = {
  username: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  imageUrl: PropTypes.string,
  timestamp: PropTypes.string,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  ),
  likes: PropTypes.number
};

export default PostContainer;
