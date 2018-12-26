import React, { Component, Fragment } from "react";
import { SearchBarContainer } from "./Components/SearchBar";
import { PostContainer } from "./Components/PostContainer";
import dummyData from "./dummy-data";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: [],
      inputText: ""
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ dummyData: dummyData });
    }, 4000);
  }

  render() {
    return (
      <div className="App">
        <SearchBarContainer />
        <Fragment>
          {this.state.dummyData.length === 0 ? (
            <h1 className="loading__text">loading...</h1>
          ) : (
            <PostContainer dummyDataOnProps={this.state.dummyData} />
          )}
        </Fragment>
      </div>
    );
  }
}
