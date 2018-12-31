import React from "react";

const AsideSectionContainer = props => {
  return (
    <div
      className={
        props.isTop
          ? "aside__container"
          : "aside__container--fixed aside__container "
      }
    >
      <div className="aside">
        <div className="photo__username">
          <div className="user__photo">
            <img src={props.userPhoto} alt="" />
          </div>
          <div className="username__fullname">
            <a className="aside__username" href="index.html">
              {props.username}
            </a>
            <p className="user__full-name">
              {props.userFirstName} {props.userLastName}
            </p>
          </div>
        </div>
        <div className="stories" />
        <div className="suggestions" />
        <div className="links__copyright" />
      </div>
    </div>
  );
};

export default AsideSectionContainer;
