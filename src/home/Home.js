import React from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-wrapper" id="home">
      <p className="h1-light">
        Hi, my name is <span className="h1-semibold">Manav Bhatt.</span> A
        Software Engineer who blends design and technology
        <span className="h1-semibold"> to create digital magic.</span>
      </p>
      <Link to={"#about"} className="home-drop-down-link">
        <FontAwesomeIcon
          icon={faAngleDown}
          bounce={true}
          className="home-drop-down"
        />
      </Link>
    </div>
  );
}

export default Home;
