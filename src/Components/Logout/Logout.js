import React from "react";
import "./_Logout.scss";

const Logout = props => {
  return (
    <div
      className={
        props.isModelTrue
          ? "logout__cover"
          : "logout__cover  logout__cover--hidden"
      }
    >
      <form onSubmit={props.logoutModal} className="logout__container">
        <input
          type="submit"
          name="yes"
          className="logout__btn yes"
          value="Yes"
        />
        <input type="submit" name="no" className="logout__btn no" value="No" />
      </form>
    </div>
  );
};

export default Logout;
