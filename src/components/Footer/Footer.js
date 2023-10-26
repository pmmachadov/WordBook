import React from "react";
import "./Footer.css";

const Footer = (LightTheme) => {
  return (
    <div className="footer">
      <hr style={ {
        width: "90%", marginTop: 20,
        backgroundColor: LightTheme ? "#3b5360" : "white",
        color: LightTheme ? "white" : "black",
      } } />
      <span className="name">
        Made by{ " pmmachadov@gmail.com " }
      </span>
    </div>
  );
};

export default Footer;
