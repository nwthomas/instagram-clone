import React from "react";
import Post from "./Post";

const PostContainer = props => {
  console.log(props.dummyDataOnProps);
  return (
    <div className="post__container">
      {props.dummyDataOnProps.map((post, index) => (
        <Post
          username={post.username}
          thumbnailUrl={post.thumbnailUrl}
          imageUrl={post.imageUrl}
          likes={post.likes}
          timestamp={post.timestamp}
          comments={post.comments}
          key={index}
        />
      ))}
    </div>
  );
};

export default PostContainer;
