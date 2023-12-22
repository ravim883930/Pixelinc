import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className=" navFixed">
        <div className="ht-inner">
          <div className="container">
            <div className="hdr-singel">
              <div className="hdr-logo">
                <a href="/">
                  <img src="/image/Pixel-logo.png" alt="Recipe Logo" />
                </a>
              </div>
              <div className="hdr-right">
                <div className="htr-inner">
                  <nav>
                    <ul>
                      <li>
                        <a className="active" href="/">
                          Home
                        </a>
                      </li>
                      <li>
                        <a className="" href="/about">
                          About
                        </a>
                      </li>
                      <li>
                        <a className="" href="/services">
                          Services
                        </a>
                      </li>
                      <li>
                        <a className="" href="/case-study">
                          Case Study
                        </a>
                      </li>
                      <li>
                        <a className="" href="/blogs">
                          Blogs
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <div className="close-menu">
                    <span></span>
                  </div>
                </div>
                <div className="hdr-btn">
                  <a className="btn btn-primary" href="/contact">
                    Contact
                  </a>
                </div>
                <div className="menu-icon">
                  <span></span>
                </div>
              </div>
            </div>
            <div className="overlay"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
