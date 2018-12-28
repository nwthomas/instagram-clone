import React from "react";
import PropTypes from "prop-types";
import "../style/App.scss";
import "./_LoginPage.scss";
import loginPhones from "../../images/login-screen-phones.png";
import instagramNameLogo from "../../images/instagram-name-logo.jpg";

const Login = props => {
  return (
    <div className="App">
      <div className="login__container">
        <div className="phones__img">
          <img src={loginPhones} alt="Phones running Instagram" />
        </div>
        <div className="form__container">
          <div className="login__logo">
            <img src={instagramNameLogo} alt="Instagram name logo" />
          </div>
          <form className="login__form" onSubmit={props.appLogin}>
            <input
              onChange={props.updateLoginForm}
              value={props.username}
              className="login__username"
              type="text"
              name="login-username"
              placeholder="Phone number, username, or email"
            />
            <input
              onChange={props.updateLoginForm}
              value={props.password}
              className="login__password"
              type="text"
              name="login-password"
              placeholder="Password"
            />
            <input
              className="login__button"
              type="button"
              name="login-submit"
              value="Log In"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  appLogin: PropTypes.func,
  updateLoginForm: PropTypes.func,
  password: PropTypes.string,
  username: PropTypes.string
};

export default Login;
