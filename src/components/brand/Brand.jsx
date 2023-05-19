import React from "react";
import "./Brand.css";
import { google, shopify, atlassian, dropbox, slack } from "./imports";
const Brand = () => {
  return (
    <div className="gpt3_brand section__margin">
      <div className="">
        <img src={google} alt="google" />
      </div>
      <div className="">
        <img src={slack} alt="google" />
      </div>
      <div className="">
        <img src={atlassian} alt="google" />
      </div>
      <div className="">
        <img src={dropbox} alt="google" />
      </div>
      <div className="">
        <img src={shopify} alt="google" />
      </div>
    </div>
  );
};

export default Brand;
