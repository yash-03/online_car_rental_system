import React from "react";
import Logo from "./components/Logo";
import ContactInfo from "./components/ContactInfo";
import SocialIcon from "./components/SocialIcon";
import LoginButton from "./components/LoginButton";
import { mdiEmail, mdiPhone } from "@mdi/js";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <Logo />
      <ContactInfo
        heading="for support mail us:"
        text="support@company.com"
        icon={mdiEmail}
      />
      <ContactInfo
        heading="service helpline call us:"
        text="+91-9999999999"
        icon={mdiPhone}
      />
      <div className="Header__SocialIcon-button">
        <SocialIcon />
        <LoginButton />
      </div>
    </div>
  );
};

export default Header;
