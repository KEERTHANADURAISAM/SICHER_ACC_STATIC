import React from "react";
import "../Style/Footer.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { MdArrowRight } from "react-icons/md";
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'
import mail from '../assets/circle.png'

import "font-awesome/css/font-awesome.min.css";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <div>
      <div className="foo-container">
        <div className="foo-display-content">
          {/* one */}
          <div className="foo-content-div">
            
            <div>
              <h4>SK Byte Works</h4>
            </div>
            <div className="foo-main">
              <p className="logo-foo-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            
            </div>
          </div>
          {/* 2 */}
          <div className="foo-content-div">
            <div>
              <h4>Contact Info</h4>
            </div>
            <div className="foo-main">
            <div className="foo-icon-div">
            
              <div className="foo-icon">
                <IconContext.Provider
                  value={{
                    color: "#67757F",
                    size: "15px",
                    borderRadius: "50%",
                  }}
                >
                  <FaLocationDot />
                </IconContext.Provider>
              </div>
              <p className="add-foo-p">Sicher Shared Services Private Limited  89, Balaji Nagar, Kalapatti Post,  Coimbatore – 641048.</p>
            </div>
            <div className="foo-icon-div">
              <div className="foo-icon">
                <IconContext.Provider
                  value={{
                    color: "#67757F",
                    size: "15px",
                    borderRadius: "50%",
                  }}
                >
                  <FaPhone />
                </IconContext.Provider>
              </div>
              <div className="foo-icon-p-div">
                <p>+91 8667289653</p>
              </div>
            </div>
            <div className="foo-icon-div">
              <div className="foo-icon">
                <IconContext.Provider
                  value={{
                    color: "#67757F",
                    size: "15px",
                    borderRadius: "50%",
                  }}
                >
                  <IoMailSharp />
                </IconContext.Provider>
              </div>
              <p>ca.jeeva93@gmail.com</p>
            </div>
            </div>
          </div>
          {/* 3 */}
          <div className="foo-content-div">
            <h4>Services</h4>
            <div className="foo-main">
            <div className="foo-icon-div">

              <IconContext.Provider
                value={{ color: "#30C7B5", size: "20px", borderRadius: "50%" }}
              >
                <MdArrowRight />
              </IconContext.Provider>
              <p className="service-p">Accounting Service</p>
            </div>
            <div className="foo-icon-div">
              <IconContext.Provider
                value={{ color: "#30C7B5", size: "20px", borderRadius: "50%" }}
              >
                <MdArrowRight />
              </IconContext.Provider>
              <p>Tax Service</p>
            </div>
            <div className="foo-icon-div">
              <IconContext.Provider
                value={{ color: "#30C7B5", size: "20px", borderRadius: "50%" }}
              >
                <MdArrowRight />
              </IconContext.Provider>
              <p>Financial Service</p>
            </div>
            </div>
          </div>
          {/* 4  */}
          <div className="foo-content-div">
            <div>
              <h4>Get In Touch</h4>
            </div>
            <div className="foo-icons-div">
            <div className="foo-main">
                <p className="logo-foo-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
              <div className="foo-social-icons">
                <div>
                  <img src={facebook} alt=''/>
                  </div>
                  <div>
                  <img src={twitter} alt=''/>
                  </div>
                  <div>
                  <img src={linkedin} alt=''/>
                  </div>
                  <div>
                  <img src={mail} alt=''/>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div>
          <hr/>
        </div>
        <div className="foo-copy-div">
          <div>
            <p>Copyright © 2025 Chartered Accountant</p>
          </div>
          <div>Powered by Chartered Accountant</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;


