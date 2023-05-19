import React from "react";
import possibility from "../../assets/possibility.png";
import "./Posibility.css";
const Posibility = () => {
  return (
    <div className="gpt3__posibility section__margin" id="posibility">
      <div className="gpt3__posibility-image">
        <img src={possibility} alt="" />
      </div>
      <div className="gpt3__posibility-content">
        <p className="request">Request Early Access to Get Started</p>
        <h1>The possibilities are beyond your imagination</h1>
        <div className="gpt3__posibility-content__text">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </div>
        <p className="get__started">Request Early Access to Get Started</p>
      </div>
    </div>
  );
};

export default Posibility;
