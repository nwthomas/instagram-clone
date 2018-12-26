import React from "react";
import Post from "./Post";
import CommentsSection from "../CommentSection/CommentsSection";
import "./PostContainer.css";

const PostContainer = props => {
  console.log(props.dummyDataOnProps);
  return (
    <div className="post__container">
      {props.dummyDataOnProps.map((post, index) => (
        <React.Fragment>
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

export default PostContainer;
