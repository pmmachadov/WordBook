import React from "react";
import "./Footer.css";

const Footer = (LightTheme) => {
  return (
    <div className="footer">
      <hr style={{
        width: "90%", marginTop: 20,
        backgroundColor: LightTheme ? "#3b5360" : "white",
        color: LightTheme ? "white" : "black",
      }}/>
      <span className="name">
        Made by{" Zahra Shahid "}
        <a href="https://github.com/ZahraShahid" target="__blank" text-decoration="none" 
         style={{
            backgroundColor: LightTheme ? "#3b5360" : "white",
            color: LightTheme ? "white" : "black",
          }}
        >
           Find out more..
        </a>
      </span>
    </div>
  );
};

export default Footer;
