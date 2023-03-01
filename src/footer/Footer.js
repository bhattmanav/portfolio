import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import manavresume from "../files/manavresume.pdf";

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
        <a
          href="mailto:manav.bhatt@icloud.com"
          className="footer-icons-clickable"
        >
          <FontAwesomeIcon
            className="footer-icons-clickable"
            icon={faEnvelope}
          />
        </a>
        <a
          href="https://github.com/bhattmanav"
          className="footer-icons-clickable"
        >
          <FontAwesomeIcon className="footer-icons-clickable" icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/manavbhatt/"
          className="footer-icons-clickable"
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="footer-icons-clickable"
          />
        </a>
        <a
          href={manavresume}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icons-clickable"
        >
          <FontAwesomeIcon className="footer-icons-clickable" icon={faFile} />
        </a>
      </div>
      <span className="footer-end body-light">
        Made with ❣️ by <span className="body-semibold">Manav Bhatt</span>
      </span>
    </div>
  );
}

export default Footer;
