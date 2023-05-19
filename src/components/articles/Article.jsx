import React from "react";
import "./Article.css";

const Article = ({ data: { id, date, title, image } }) => {
  return (
    <div key={id} className="gpt3__article-card">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="gpt3__article-body">
        <p>{date}</p>
        <h4>{title}</h4>
        <span>Read Full Article</span>
      </div>
    </div>
  );
};

export default Article;
