import React from "react";
import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";
import "./projects.css";
import twitterImage from "../images/twitter.png";
import blockbusterImage from "../images/blockbuster.png";
import ecommerceImage from "../images/ecommerce.png";

function Projects() {
  const cards = [
    {
      title: "Twitter - Social Networking Service",
      description:
        "A web app for staying connected and staying informed about the world! Share your thoughts and ideas with your friends and family by posting on your personalized timeline. Stay up-to-date with the latest news, trending topics, and events from around the world with our curated news feed.",
      category: "Website",
      imageHref: twitterImage,
      isImageOnLeft: true,
      isSpecial: false,
      websiteHref: "https://twitter-79c1c.web.app/",
    },
    {
      title: "Blockbuster - Streaming Guide",
      description:
        "A website for finding your next streaming favorite with ease using Blockbuster! Search for your favorite movies and TV shows and discover where to watch them across popular streaming services.",
      category: "Website",
      imageHref: blockbusterImage,
      isImageOnLeft: false,
      isSpecial: true,
      websiteHref: "https://blockbuster.watch/browse",
    },
    {
      title: "Simple - Ecommerce Store",
      description:
        "A web app designed to revolutionize your shopping experience! Our platform offers all the functionality of an ecommerce store, but with a personalized touch. With our user-friendly interface, you can easily browse through a wide range of products, and purchase with just a few clicks.",
      category: "Website",
      imageHref: ecommerceImage,
      isImageOnLeft: true,
      isSpecial: false,
      websiteHref: "http://simple-ecommerce-store-fu.herokuapp.com/",
    },
  ];

  return (
    <div className="projects-wrapper" id="work">
      <span className="projects-header">
        <span className="h2-light">Some Things I've </span>
        <span className="h2-semibold">Built</span>
      </span>
      {cards.map((card) => (
        <ProjectCard key={card.title} {...card} />
      ))}
    </div>
  );
}

Projects.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  imageHref: PropTypes.string,
  isImageOnLeft: PropTypes.bool,
  isSpecial: PropTypes.bool,
  websiteHref: PropTypes.string,
};

export default Projects;
