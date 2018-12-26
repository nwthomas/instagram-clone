import React, { Component } from "react";
import SearchBarContainer from "./Components/SearchBar/SearchBarContainer";
import PostContainer from "./Components/PostContainer/PostContainer";
import dummyData from "./dummy-data";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <SearchBarContainer />
        <PostContainer dummyDataOnProps={this.state.dummyData} />
      </div>
    );
  }
}

export default App;
