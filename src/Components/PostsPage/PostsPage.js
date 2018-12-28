import React, { Fragment } from "react";
import { PostContainer } from "../PostContainer";
import { AsideSectionContainer } from "../AsideSection";
import "../style/App.scss";

const PostsPage = props => {
  return (
    <Fragment>
      <div className="body__content">
        <PostContainer
          addNewComment={props.addNewComment}
          dummyDataOnProps={props.dummyDataOnProps}
          selectCommentInput={props.selectCommentInput}
          likes={props.likes}
          comments={props.comments}
          userLiked={props.userLiked}
          heartClick={props.heartClick}
          postComment={props.postComment}
          inputText={props.inputText}
        />
        <AsideSectionContainer
          username={props.username}
          userPhoto={props.userPhoto}
          userFirstName={props.userFirstName}
          userLastName={props.userLastName}
        />
      </div>
    </Fragment>
  );
};

export default PostsPage;
