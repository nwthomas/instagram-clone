import React from "react";
import Post from "./Post";

const PostContainer = props => {
  console.log(props);
  return (
    <div className="post__container">
      {props.dummyDataOnProps.map((post, index) => (
        <Post
          username={post.username}
          thumbnail={post.thumbnail}
          imageURL={post.imageURL}
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
