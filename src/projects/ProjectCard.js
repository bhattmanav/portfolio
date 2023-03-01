import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function ProjectCard({
  title,
  description,
  category,
  imageHref,
  isImageOnLeft,
  isSpecial,
  websiteHref,
}) {
  const { length } = description.split(" ");
  const middleIndex = Math.floor(length / 2);
  const [firstHalf, secondHalf] = [
    description.split(" ").slice(0, middleIndex).join(" "),
    description.split(" ").slice(middleIndex).join(" "),
  ];

  return (
    <div className="project-card-wrapper">
      {isImageOnLeft && (
        <img
          className="project-image"
          src={imageHref}
          alt=""
          onClick={() => window.open(websiteHref)}
          aria-label={title}
        />
      )}
      <div className="project-card-inner-wrapper">
        <h5 className="project-title h5-semibold">{title}</h5>
        <span className="project-description h3-light">
          {firstHalf}{" "}
          <span className="project-description h3-semibold">{secondHalf}</span>
        </span>
        <span className="project-category body-light">{category}</span>
        <button
          onClick={() => window.open(websiteHref)}
          className={
            isSpecial
              ? "project-view-work button-light special"
              : "project-view-work button-light"
          }
          aria-label={`View ${title} work`}
        >
          View Work
          <FontAwesomeIcon
            icon={isSpecial ? faArrowRight : faChevronRight}
            bounce={true}
            aria-hidden="true"
          />
        </button>
      </div>
      {!isImageOnLeft && (
        <img
          className="project-image-right"
          src={imageHref}
          alt=""
          onClick={() => window.open(websiteHref)}
          aria-label={title}
        />
      )}
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  imageHref: PropTypes.string.isRequired,
  isImageOnLeft: PropTypes.bool.isRequired,
  isSpecial: PropTypes.bool.isRequired,
  websiteHref: PropTypes.string.isRequired,
};

export default ProjectCard;
