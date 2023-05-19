import React from "react";
import "./Header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
const Header = () => {
  return (
    <div className="gpt3__header  section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text ">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="gpt3__header-content__input">
          <input type="text" className="email" placeholder="email" />
          <button type="button" className="button">
            Subscribe
          </button>
        </div>
        <div className="gpt3__header-content_people">
          <img src={people} alt="people" />
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="" />
      </div>
    </div>
  );
};

export default Header;
