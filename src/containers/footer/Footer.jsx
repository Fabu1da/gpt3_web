import React from "react";
import logo from "../../assets/logo.svg";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <h1>Do you want to step in to the future before others</h1>
      <button>Request Early Access</button>

      <div className="gpt3__footer-navbar">
        <div className="gpt3__footer-navbar__logo footer__logo">
          <img src={logo} alt="" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <div className="gpt3__footer-navbar__nav footer__list">
          <p>Links</p>
          <ul>
            <li>Overons</li>
            <li>Social Media</li>
            <li>Counters</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="gpt3__footer-navbar__company footer__list ">
          <p>Company</p>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="gpt3__footer-navbar__get footer__list">
          <p>Get in touch</p>
          <ul>
            <li>Crechterwoord K12 182 DK Alknjkcb</li>
            <li>085-132567</li>
            <li>info@payme.net</li>
          </ul>
        </div>
      </div>
      <div className="gtp3__footer-copyright">
        © 2021 GPT-3. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
