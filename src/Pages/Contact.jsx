import React from "react";

const Contact = () => {
  return (
    <>
      <section class="contact-main-section-2">
        <div class="container cards-mappd">
          <div class="top-heading">
            <h3
              data-aos="zoom-in"
              data-aos-duration="1000"

            >
              Contact Us
            </h3>
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"

            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
          </div>
          <div class="contact-card">
            <div class="contact-flx-main">
              <div class="contact-inner-flx-40">
                <div
                  class="contact-social aos-init"
                  data-aos="flip-up"
                  data-aos-duration="1000"
                >
                  <img src="/image/contactbg-1-agfyTmH_.png" alt="" />
                </div>
              </div>
              <div class="contact-inner-flx-60">
                <div class="contact-form">
                  <div class="contact-frm">
                    <div class="form-flx">
                      <div class="frm-flx-100">
                        <div class="input-singl">
                          <input
                            data-aos="zoom-in"
                            data-aos-duration="2000"
                            class="aos-init aos-animate"
                            type="text"
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                      <div class="frm-flx-50">
                        <div class="input-singl">
                          <input
                            data-aos="zoom-in"
                            data-aos-duration="2500"
                            class="aos-init"
                            type="text"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>
                      <div class="frm-flx-50">
                        <div class="input-singl">
                          <input
                            data-aos="zoom-in"
                            data-aos-duration="2700"
                            class="aos-init"
                            type="text"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                      <div class="frm-flx-50">
                        <div class="input-singl">
                          <textarea
                            data-aos="zoom-in"
                            data-aos-duration="3000"
                            class="aos-init"
                            name=""
                            placeholder="Your Message"
                            rows="3"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div class="cntct-btn">
                      <button class="btn btn-primary">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
