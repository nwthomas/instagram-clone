import React from "react";
import instagramIconLogo from "../../images/instagram-icon-logo.svg";
import instagramNameLogo from "../../images/instagram-name-logo.jpg";
import PropTypes from "prop-types";

const LogoLink = props => {
  return (
    <div className="logo__links">
      <div className="instagram-icon-logo">
        <img src={instagramIconLogo} alt="Instagram logo icon" />
      </div>
      <div
        className={props.isTop ? "divider-line" : "display-none divider-line"}
      />
      <div
        className={
          props.isTop
            ? "instagram-name-logo"
            : "display-none instagram-name-logo"
        }
      >
        <img src={instagramNameLogo} alt="Instagram name logo" />
      </div>
    </div>
  );
};

LogoLink.propTypes = {
  instagramIconLogo: PropTypes.string,
  instagramNameLogo: PropTypes.string,
  isTop: PropTypes.bool
};

export default LogoLink;
