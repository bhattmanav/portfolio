import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="home-wrapper">
      <p className="h1-light">
        Hi, my name is <span className="h1-semibold">Manav Bhatt.</span> A
        software engineer who blends design and technology
        <span className="h1-semibold"> to create digital magic.</span>
      </p>
      <FontAwesomeIcon
        icon={faAngleDown}
        bounce={true}
        className="home-drop-down"
      />
    </div>
  );
}

export default Home;
