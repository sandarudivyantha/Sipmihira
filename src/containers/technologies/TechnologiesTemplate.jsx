import React from 'react';
import './technologiesTemplate.css';

const TechnologiesTemplate = ({ imgUrl, name }) => (
  <div className="sipmihira__technology-container_TechnologiesTemplate">
    <div className="sipmihira__technology-container_article-image">
      <img src={imgUrl} alt="technology_image" />
    </div>
    <div className="sipmihira__technology-container_article-content">
      <div>
        <p>{name}</p>
      </div>
    </div>
  </div>
);

export default TechnologiesTemplate;
