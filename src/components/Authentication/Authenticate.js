import React, { Component } from "react";
import { Login } from "../LoginPage";

const Authenticate = App => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
        username: "",
        password: "",
        fullName: ""
      };
    }

    componentDidMount() {
      const userExists = localStorage.getItem("username");
      if (userExists) {
        this.setState({
          loggedIn: true
        });
      } else {
        return null;
      }
    }

    appLogin = event => {
      event.preventDefault();
      localStorage.setItem("username", this.state.username);
      localStorage.setItem("password", this.state.password);
      localStorage.setItem("fullName", this.state.fullName);
      this.setState({
        loggedIn: true,
        username: "",
        password: "",
        fullName: ""
      });
    };

    loginBtnChange = () => {
      console.log("Dude");
      const loginButton = document.querySelector(".login__button");
      this.state.username || this.state.fullName || this.state.password
        ? loginButton.classList.add("login__button--active")
        : loginButton.classList.remove("login__button--active");
    };

    onChange = event => {
      if (event.target.name === "login-username") {
        this.setState(
          {
            username: event.target.value
          },
          () => this.loginBtnChange()
        );
      } else if (event.target.name === "login-password") {
        this.setState(
          {
            password: event.target.value
          },
          () => this.loginBtnChange()
        );
      } else if (event.target.name === "login-fullname") {
        this.setState(
          {
            fullName: event.target.value
          },
          () => this.loginBtnChange()
        );
      }
    };

    render() {
      return this.state.loggedIn === true ? (
        <App />
      ) : (
        <Login
          fullName={this.fullName}
          appLogin={this.appLogin}
          username={this.state.username}
          password={this.state.password}
          onChange={this.onChange}
        />
      );
    }
  };
};

export default Authenticate;
