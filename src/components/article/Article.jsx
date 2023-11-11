import React from 'react';
import './article.css';

const Article = ({ imgUrl, name, status, possision, campus, department, department_possion }) => (
  <div className="sipmihira__blog-container_article">
    <div className="sipmihira__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="sipmihira__blog-container_article-content">
      <div>
        <p>{name}</p>
        <h3>{status}</h3><br/>
        <h4>{possision}</h4>
        <p2>{campus}</p2><br/>
        <h4>{department}</h4>
        <p2>{department_possion}</p2><br/>
      </div>
    </div>
  </div>
);

export default Article;
