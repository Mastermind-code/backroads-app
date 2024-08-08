import React from "react";
import logo from "../assets/images/logo.svg";
import { pageLink, socialLink } from "../data";

const navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <ul className="nav-links" id="nav-links">
            {pageLink.map((link) => {
              const { id, href, text } = link;
              return (
                <li key={id}>
                  <a href={href} className="nav-link">
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>

          <ul className="nav-icons">
            {socialLink.map((link) => {
              const { id, href, name } = link;
              return (
                <li key={id}>
                  <a href={href} target="_blank" className="nav-icon">
                    <i className={name}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default navbar;
