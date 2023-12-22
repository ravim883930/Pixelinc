import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-main">
            <div className="ftr-innerflx">
              <div className="ftr-left">
                <div className="ftr-top">
                  <h3>Contact us</h3>
                </div>
                <ul>
                  <li>
                    <div className="ftr-address">
                      <span>
                      <i className="bi bi-geo-alt"></i>
                      </span>
                      <h3>Address</h3>
                    </div>
                    <p>
                      3RD FLOOR, KNR SQUARE, Door No 1-60/8/A &amp; B, opp. The
                      Platina, Hyderabad, Telangana 500032
                    </p>
                  </li>
                  <li>
                    <div className="ftr-address">
                      <span>
                      <i className="bi bi-envelope-at-fill"></i>
                      </span>
                      <h3>Email us</h3>
                    </div>
                    <p>hr@pixellinc.com</p>
                  </li>
                  <li>
                    <div className="ftr-address">
                      <span>
                      <i className="bi bi-telephone"></i>
                      </span>
                      <h3>Call us</h3>
                    </div>
                    <p>+91 85270 07217</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="ftr-innerflx">
              <div className="ftr-right">
                <div className="ftr-bottom">
                  <h3>PixelLinc Technology Pvt Ltd</h3>
                </div>
                <ul>
                  <li>
                    <div className="ftr-address ftr-social">
                      <span>
                      <i className="bi bi-facebook"></i>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="ftr-address ftr-social">
                      <span>
                      <i className="bi bi-instagram"></i>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="ftr-address ftr-social">
                      <span>
                      <i className="bi bi-linkedin"></i>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="ftr-policy">
                <p>© 2022 PIXELLINC TECHNOLOGY | ALL RIGHTS RESERVED.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
