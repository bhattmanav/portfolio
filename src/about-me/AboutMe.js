import React from "react";
import "./AboutMe.css";
import music from "../images/music.png";
import games from "../images/games.png";
import travelling from "../images/travelling.png";

function AboutMe() {
  return (
    <div className="about-me-wrapper">
      <div className="about-me-inner-wrapper">
        <div className="about-me-title">
          <span className="h4-semibold">a bit about me</span>
          <p className="about-me-paragraph h3-light">
            I am a software engineer who is passionate about building I am a
            UI/UX designer who is passionate about creating{" "}
            <span className="h3-semibold">
              engaging and intuitive digital experiences.
              <span className="h3-light"> When I'm not coding, </span>
              you can find me exploring new music, playing games, and traveling
              to new places.
            </span>
          </p>
        </div>
        <div className="about-me-images-wrapper">
          <img src={music} alt="guitar" />
          <div className="about-me-images-inner-wrapper">
            <img src={games} alt="games" />
            <img src={travelling} alt="travelling" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
