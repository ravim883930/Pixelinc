import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  return (
    <main>
      <section className="banner-section ">
        <div className="container">
          <div className="bnr-main">
            <div className="bnr-innerflx">
              <div className="bnr-heading" data-aos="fade-right" data-aos-duration="2000">
                <h1>Lorem ipsum dolor sit amet, consectetur </h1>
                <div className="bnrseprate-line">
                  <span className=""></span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <div className="bnr-btn">
                  <Link className="btn btn-primary" to="/contact">
                    Talk to our Expert
                  </Link>
                </div>
              </div>
            </div>
            <div className="bnr-innerflx">
              <div className="bnr-img" data-aos="fade-left" data-aos-duration="2000">
                <img src="image/about-bnr.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-mission-section">
        <div className="container">
          <div className="top-heading">
            <h3>Lorem ispum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt
            </p>
          </div>
          <div className="our-missionmain">
            <div className="mission-inner50">
              <div className="mission-img">
                <img src="image/Rectangle-50.png" alt="" />
              </div>
            </div>
            <div className="mission-inner50">
              <div className="mission-right">
                <div className="missionlist">
                  <span>1</span>
                </div>
                <div className="mission-contact">
                  <h3>Our Mission</h3>
                  <p className="cntnt">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </p>
                </div>
              </div>
              <div className="mission-right">
                <div className="missionlist">
                  <span>2</span>
                </div>
                <div className="mission-contact">
                  <h3>Our Goals</h3>
                  <p className="cntnt">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </p>
                </div>
              </div>
              <div className="mission-right">
                <div className="missionlist">
                  <span>3</span>
                </div>
                <div className="mission-contact">
                  <h3>Why Us?</h3>
                  <p className="cntnt">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="amet-section fadeUp">
        <div className="container">
          <div className="amet-main">
            <div className="amet-innerflx">
              <div className="amet-contant">
                <h3>Lorem ispum Lorem ispum Lorem ispum </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  nihil esse, tempora, id tempore amet eligendi pariatur
                  temporibus asperiores commodi aut nostrum quidem consectetur
                  doloribus beatae? Totam minima voluptas repellat aspernatur
                  aliquid, numquam molestiae debitis tempora ab vero impedit
                  libero suscipit quas. Nam nobis, architecto consequatur
                  facilis ad ea veritatis!
                </p>
              </div>
            </div>
            <div className="amet-innerflx">
              <div className="amet-image">
                <img src="image/amet-EQmk2gh_.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="digitlprtnrs-section">
        <div className="container">
          <div className="top-heading-2">
            <h4>DIGITAL PARTNERS</h4>
            <h3>Our Clients</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco lab
            </p>
          </div>
          <div className="digitlprtnrs-main">
            <div className="digitl-innermain">
              <ul>
                <li className="upFade">
                  <div className="prtnr-img">
                    <img src="/image/digital-1-28oqiqpm.png" alt="" />
                  </div>
                </li>
                <li className="upFade">
                  <div className="prtnr-img">
                    <img src="/image/digital-2-f3mssPBj.png" alt="" />
                  </div>
                </li>
                <li className="upFade">
                  <div className="prtnr-img">
                    <img src="/image/digital-3-2J29tref.png" alt="" />
                  </div>
                </li>
                <li className="upFade">
                  <div className="prtnr-img">
                    <img src="/image/digital-4-WBoF-69V.png" alt="" />
                  </div>
                </li>
                <li className="upFade">
                  <div className="prtnr-img">
                    <img src="/image/digital-5-HjkDyPRu.png" alt="" />
                  </div>
                </li>
                <li className="upFade">
                  <div className="prtnr-img">
                    <img src="/image/digital-6-CmZsID7G.png" alt="" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="readblog-section">
        <div className="container">
          <div className="top-heading-2 lft-heading-2">
            <h3>Read Blogs</h3>
          </div>
          <div className="blog-list">
            <ul>
              <li className="">
                <div className="blog-card">
                  <div className="blog-img abt-cardss" >
                    <Link
                      className="cards-abt"
                      to="/blogdescription"

                    ></Link>
                  </div>
                  <div className="blog-dtl">
                    <Link to="/blogdescription">
                      Lorem ipsum dolor sit ametLorem ips um dolor sit amet
                    </Link>
                    <p>
                      Lorem ipsum dolor sit amet, cons ecte tur adipiscing elit,
                    </p>
                  </div>
                </div>
              </li>
              <li className="">
                <div className="blog-card">
                  <div className="blog-img abt-cardss" >
                    <Link className="cards-abt" to="/blogdescription"></Link>
                  </div>
                  <div className="blog-dtl">
                    <Link to="/blogdescription">
                      Lorem ipsum dolor sit ametLorem ips um dolor sit amet
                    </Link>
                    <p>
                      Lorem ipsum dolor sit amet, cons ecte tur adipiscing elit,
                    </p>
                  </div>
                </div>
              </li>
              <li className="">
                <div className="blog-card">
                  <div className="blog-img abt-cardss" >
                  <Link className="cards-abt" to="/blogdescription"></Link>
                  </div>
                  <div className="blog-dtl">
                    <Link to="/blogdescription">
                      Lorem ipsum dolor sit ametLorem ips um dolor sit amet
                    </Link>
                    <p>
                      Lorem ipsum dolor sit amet, cons ecte tur adipiscing elit,
                    </p>
                  </div>
                </div>
              </li>
              <li className="">
                <div className="blog-card">
                  <div className="blog-img abt-cardss" >
                  <Link className="cards-abt" to="/blogdescription"></Link>
                  </div>
                  <div className="blog-dtl">
                    <Link to="/blogdescription">
                      Lorem ipsum dolor sit ametLorem ips um dolor sit amet
                    </Link>
                    <p>
                      Lorem ipsum dolor sit amet, cons ecte tur adipiscing elit,
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
