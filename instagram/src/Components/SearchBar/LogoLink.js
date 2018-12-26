import React from "react";
import "./SearchBar.css";

const LogoLink = () => {
  return (
    <div className="logo__links">
      <div className="instagram-icon-logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M336 96c21.2 0 41.3 8.4 56.5 23.5S416 154.8 416 176v160c0 21.2-8.4 41.3-23.5 56.5S357.2 416 336 416H176c-21.2 0-41.3-8.4-56.5-23.5S96 357.2 96 336V176c0-21.2 8.4-41.3 23.5-56.5S154.8 96 176 96h160m0-32H176c-61.6 0-112 50.4-112 112v160c0 61.6 50.4 112 112 112h160c61.6 0 112-50.4 112-112V176c0-61.6-50.4-112-112-112z" />
          <path d="M360 176c-13.3 0-24-10.7-24-24s10.7-24 24-24c13.2 0 24 10.7 24 24s-10.8 24-24 24zM256 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64m0-32c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96z" />
        </svg>
      </div>
      <div className="divider-line" />
      <div className="instagram-name-logo">
        <img
          src="data:image/png;base64,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"
          alt="Instagram name logo"
        />
      </div>
    </div>
  );
};

export default LogoLink;
