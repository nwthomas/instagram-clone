import React, { Component } from "react";
import { SearchBarContainer } from "./Components/SearchBar";
import { PostContainer } from "./Components/PostContainer";
import { AsideSectionContainer } from "./Components/AsideSection";
import dummyData from "./dummy-data";
import "../src/Components/style/App.scss";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: [],
      comments: [],
      likes: [],
      userLiked: [],
      username: "nwthomas",
      inputText: ""
    };
  }

  componentDidMount() {
    const arr = dummyData.map(post => post.comments);
    const likes = dummyData.map(post => post.likes);
    const userLiked = likes.map(like => false);
    setTimeout(() => {
      this.setState({
        dummyData: dummyData,
        comments: arr,
        likes: likes,
        userLiked: userLiked
      });
    }, 400);
  }

  heartClick = event => {
    const indexClicked = parseInt(event.target.name);
    const userLiked = this.state.userLiked;
    let newLikedArr = [];
    for (let i = 0; i < userLiked.length; i++) {
      newLikedArr.push(indexClicked === i ? true : false);
    }
    this.setState({
      userLiked: newLikedArr
    });
  };

  onChange = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  addNewComment = (event, index) => {
    event.preventDefault();
    const newArr = this.state.comments;
    newArr[index].push({
      username: this.state.username,
      text: this.state.inputText
    });
    this.setState({
      comments: newArr,
      inputText: ""
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
        <SearchBarContainer />
        <div className="body__content">
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
            <PostContainer
              addNewComment={this.addNewComment}
              dummyDataOnProps={this.state.dummyData}
              selectCommentInput={this.selectCommentInput}
              likes={this.state.likes}
              comments={this.state.comments}
              userLiked={this.state.userLiked}
              heartClick={this.heartClick}
              postComment={this.onChange}
              inputText={this.state.inputText}
            />
          )}
        </div>
        <AsideSectionContainer />
      </div>
    );
  }
}
