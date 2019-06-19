import React, { Fragment } from "react";
import { PostContainer } from "../PostContainer";
import { AsideSectionContainer } from "../AsideSection";
import PropTypes from "prop-types";

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
          isTop={props.isTop}
          username={props.username}
          userPhoto={props.userPhoto}
          fullName={props.fullName}
        />
      </div>
    </Fragment>
  );
};

PostsPage.propTypes = {
  dummyDataOnProps: PropTypes.arrayOf(
    PropTypes.shape({
      comments: PropTypes.array,
      imageUrl: PropTypes.string,
      likes: PropTypes.number,
      thumbnailUrl: PropTypes.string,
      timestamp: PropTypes.string,
      username: PropTypes.string
    })
  ),
  addNewComment: PropTypes.func,
  selectCommentInput: PropTypes.func,
  likes: PropTypes.array,
  comments: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
      })
    )
  ),
  userLiked: PropTypes.arrayOf(PropTypes.bool),
  heartClick: PropTypes.func,
  postComment: PropTypes.func,
  inputText: PropTypes.arrayOf(PropTypes.string),
  isTop: PropTypes.bool,
  username: PropTypes.string,
  userPhoto: PropTypes.string,
  fullName: PropTypes.string
};

export default PostsPage;
