import React from "react";
import icons from "../../images/icons.png";
import PropTypes from "prop-types";

const Icons = props => {
  return (
    <div className="icons">
      <img onClick={props.logout} src={icons} alt="Social icons" />
    </div>
  );
};

Icons.propTypes = {
  logout: PropTypes.func,
  icons: PropTypes.string
};

export default Icons;
