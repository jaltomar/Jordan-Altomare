import React from "react";

export default function Cell({ link, altText, imgSrc, title, description }) {
  return (
    <a href={link} target="_blank" className="me-cell">
      <div className="first half">
        <img alt={altText} width="100%" src={imgSrc} />
      </div>
      <div className="second half">
        <h3>{title}</h3>
        <p style={{ margin: "0" }} className="visible-text">
          {description}
        </p>
      </div>
    </a>
  );
}
