import React from "react";
import Post from "./Post";
import CommentsSection from "../CommentSection/CommentsSection";
import PropTypes from "prop-types";
import "./PostContainer.css";

const PostContainer = props => {
  return (
    <div className="post__container">
      {props.dummyDataOnProps.map((post, index) => (
        <React.Fragment key={"fragment" + index}>
          <Post
            username={post.username}
            thumbnailUrl={post.thumbnailUrl}
            imageUrl={post.imageUrl}
            timestamp={post.timestamp}
            comments={post.comments}
            key={"post" + index}
          />
          <CommentsSection
            likes={post.likes}
            username={post.username}
            comments={post.comments}
            timestamp={post.timestamp}
            key={"comments" + index}
          />
        </React.Fragment>
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
