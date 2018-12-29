import React, { Component, Fragment } from "react";
import { SearchBarContainer } from "./Components/SearchBar";
import { PostsPage } from "./Components/PostsPage";
import { Authenticate } from "./Components/Authentication";
import dummyData from "./dummy-data";
import "../src/Components/style/App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: [],
      comments: [],
      likes: [],
      userLiked: [],
      username: "",
      password: "",
      userFirstName: "Nathan",
      userLastName: "Thomas",
      userPhoto:
        "http://fangmarks.com/wp-content/uploads/2013/05/instagram-fangmarks-may-10.jpg",
      inputText: [],
      searchText: ""
    };
  }

  componentDidMount() {
    const arr = dummyData.map(post => post.comments);
    const likes = dummyData.map(post => post.likes);
    const userLiked = likes.map(like => false);
    const commentArr = likes.map(like => "");
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    setTimeout(() => {
      this.setState({
        dummyData: dummyData,
        comments: arr,
        likes: likes,
        userLiked: userLiked,
        username: username,
        password: password,
        inputText: commentArr
      });
    }, 100);
  }

  likePhoto = indexClicked => {
    const newLikesNumArr = this.state.likes.map((likeNums, numIndex) => {
      if (numIndex === indexClicked) {
        return !this.state.userLiked[numIndex]
          ? (likeNums += 1)
          : (likeNums -= 1);
      } else {
        return likeNums;
      }
    });
    this.setState({
      likes: newLikesNumArr
    });
  };

  heartClick = event => {
    const indexClicked = parseInt(event.target.name);
    const newLikedArr = this.state.userLiked.map((like, index) => {
      if (index === indexClicked) {
        return like ? false : true;
      } else {
        return like;
      }
    });
    this.setState({
      userLiked: newLikedArr
    });
    this.likePhoto(indexClicked);
  };

  commentOnChange = event => {
    const updatedCommentText = event.target.value;
    const index = parseInt(event.target.id);
    const newInputTextArr = this.state.inputText.map(
      (commentBox, commentIndex) => {
        if (index === commentIndex) {
          return (commentBox = updatedCommentText);
        } else {
          return commentBox;
        }
      }
    );
    this.setState({
      inputText: newInputTextArr
    });
  };

  addNewComment = (event, index) => {
    event.preventDefault();
    const newArr = this.state.comments;

    newArr[index].push({
      username: this.state.username,
      text: this.state.inputText[index]
    });
    const newInputTextArr = this.state.inputText.map(
      (commentBox, commentIndex) => {
        if (index === commentIndex) {
          return (commentBox = "");
        } else {
          return commentBox;
        }
      }
    );
    this.setState({
      comments: newArr,
      inputText: newInputTextArr
    });
  };

  selectCommentInput = event => {
    const commentInputArr = document.querySelectorAll(".comment__input");
    commentInputArr.forEach((comment, index) => {
      if (comment.id === event.target.name) {
        return commentInputArr[index].focus();
      }
    });
  };

  render() {
    return (
      <div className="App">
        <Fragment>
          <SearchBarContainer />
          {this.state.dummyData.length === 0 ? (
            <div className="loading-img__container">
              <svg
                className="loading-img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M336 96c21.2 0 41.3 8.4 56.5 23.5S416 154.8 416 176v160c0 21.2-8.4 41.3-23.5 56.5S357.2 416 336 416H176c-21.2 0-41.3-8.4-56.5-23.5S96 357.2 96 336V176c0-21.2 8.4-41.3 23.5-56.5S154.8 96 176 96h160m0-32H176c-61.6 0-112 50.4-112 112v160c0 61.6 50.4 112 112 112h160c61.6 0 112-50.4 112-112V176c0-61.6-50.4-112-112-112z" />
                <path d="M360 176c-13.3 0-24-10.7-24-24s10.7-24 24-24c13.2 0 24 10.7 24 24s-10.8 24-24 24zM256 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64m0-32c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96z" />
              </svg>
            </div>
          ) : (
            <div className="body__content">
              <PostsPage
                addNewComment={this.addNewComment}
                dummyDataOnProps={this.state.dummyData}
                selectCommentInput={this.selectCommentInput}
                likes={this.state.likes}
                comments={this.state.comments}
                userLiked={this.state.userLiked}
                heartClick={this.heartClick}
                postComment={this.commentOnChange}
                inputText={this.state.inputText}
                username={this.state.username}
                userPhoto={this.state.userPhoto}
                userFirstName={this.state.userFirstName}
                userLastName={this.state.userLastName}
              />
            </div>
          )}
          ;
        </Fragment>
      </div>
    );
  }
}

export default Authenticate(App);
