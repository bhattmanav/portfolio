import React from "react";
import "./footer.css";
import mailIcon from "../images/mail.png";
import behanceIcon from "../images/behance.png";
import dribbleIcon from "../images/dribble.png";
import linkedInIcon from "../images/linkedIn.png";

function Footer() {
  return (
    <div className="footer-wrapper">
      <span className="footer-header h1-light">
        Get <span className="h1-semibold">in Touch.</span>
      </span>
      <span className="footer-sub-header body-light">
        So that we can talk more about...
      </span>
      <div className="footer-icons">
        <img
          src={mailIcon}
          alt="Email icon"
          className="footer-icons-clickable"
        />
        <img
          src={behanceIcon}
          alt="Behance icon"
          className="footer-icons-clickable"
        />
        <img
          src={dribbleIcon}
          alt="Dribble icon"
          className="footer-icons-clickable"
        />
        <img
          src={linkedInIcon}
          alt="LinkedIn icon"
          className="footer-icons-clickable"
        />
      </div>
      <span className="footer-end body-light">
        Made with ❣️ by <span className="body-semibold">Manav Bhatt</span>
      </span>
    </div>
  );
}

export default Footer;
