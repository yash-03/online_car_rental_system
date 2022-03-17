import Icon from "@mdi/react";
import React from "react";
import {
  mdiFacebook,
  mdiInstagram,
  mdiTwitter,
  mdiWhatsapp,
  mdiGooglePlus,
} from "@mdi/js";
import "./SocialIcon.css";

const SocialIcon = () => {
  return (
    <div className="Header__SocialIcon">
      <div className="Header__SocialIcon-icon">
        <Icon path={mdiFacebook} size={1} color="#fff" />
      </div>
      <div className="Header__SocialIcon-icon">
        <Icon path={mdiInstagram} size={1} color="#fff" />
      </div>
      <div className="Header__SocialIcon-icon">
        <Icon path={mdiTwitter} size={1} color="#fff" />
      </div>
      <div className="Header__SocialIcon-icon">
        <Icon path={mdiWhatsapp} size={1} color="#fff" />
      </div>
      <div className="Header__SocialIcon-icon">
        <Icon path={mdiGooglePlus} size={1} color="#fff" />
      </div>
    </div>
  );
};

export default SocialIcon;
