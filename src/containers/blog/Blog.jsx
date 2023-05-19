import React from "react";
import "./Blog.css";
import blog1 from "../../assets/blog01.png";
import blog5 from "../../assets/blog05.png";
import blog3 from "../../assets/blog03.png";
import blog4 from "../../assets/blog04.png";
import blog2 from "../../assets/blog02.png";
import { Article } from "../../components";
const articles = [
  {
    id: 2,
    date: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    image: blog2,
  },
  {
    id: 3,
    date: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    image: blog3,
  },
  {
    id: 4,
    date: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    image: blog4,
  },
  {
    id: 5,
    date: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    image: blog5,
  },
];

const Blog = () => {
  return (
    <div className="gpt3__blog section__margin" id="blog">
      <h1>A lot is happening, We are blogging about it.</h1>
      <div className="gpt3__blog-list">
        <div className="article gpt3__blog-main">
          <Article
            data={{
              id: 1,
              date: "Sep 26, 2021",
              title:
                "GPT-3 and Open  AI is the future. Let us exlore how it is?",
              image: blog1,
            }}
          />
        </div>
        <div className="article gpt3__blog-other__list">
          {articles.map((article) => {
            return <Article key={article.id} data={article} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
