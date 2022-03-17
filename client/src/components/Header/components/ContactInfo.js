import React from "react";
import Icon from "@mdi/react";
import "./ContactInfo.css";

const ContactInfo = ({ heading, text, icon }) => {
  return (
    <div className="Header__Contact-info">
      <div className="Header__Contact-info-icon">
        <Icon path={icon} size={1} />
      </div>
      <div className="Header__Contact-info-record">
        <div className="Header__Contact-info-heading">{heading}</div>
        <div className="Header__Contact-info-text">{text}</div>
      </div>
    </div>
  );
};

export default ContactInfo;
