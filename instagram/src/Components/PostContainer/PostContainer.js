import React, { Fragment, Component } from "react";
import Post from "./Post";
import CommentsSection from "../CommentSection/CommentsSection";
import PropTypes from "prop-types";
import "./PostContainer.css";

export default class PostContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="post__container">
        {this.props.dummyDataOnProps.map((post, index) => (
          <Fragment key={"fragment" + index}>
            <Post
              username={post.username}
              thumbnailUrl={post.thumbnailUrl}
              imageUrl={post.imageUrl}
              key={"post" + index}
            />
            <CommentsSection
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
  }
}

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
