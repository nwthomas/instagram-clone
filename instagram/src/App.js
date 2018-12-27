import React, { Component } from "react";
import { SearchBarContainer } from "./Components/SearchBar";
import { PostContainer } from "./Components/PostContainer";
import dummyData from "./dummy-data";
import "../src/Components/style/App.scss";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: [],
      inputText: "",
      isClicked: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ dummyData: dummyData });
    }, 100);
  }

  heartClick = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
  };

  render() {
    return (
      <div className="App">
        <SearchBarContainer />
        <div className="body__content">
          {this.state.dummyData.length === 0 ? (
            <h1 className="loading__text">loading...</h1>
          ) : (
            <PostContainer
              dummyDataOnProps={this.state.dummyData}
              isClicked={this.state.isClicked}
              heartClick={this.heartClick}
            />
          )}
        </div>
      </div>
    );
  }
}
