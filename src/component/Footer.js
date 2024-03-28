import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactWhatsapp from "react-whatsapp";
import AboutUs from "../data/AboutUs.json";
import items from "../data/NavBar.json";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons"; // Import the brand icons
import { fas } from "@fortawesome/free-solid-svg-icons"; // Import the solid icons
import { useNavigate } from "react-router-dom";
library.add(fab, fas); // Initialize the library with brand and solid icons

function Footer() {
  const navigate=useNavigate()
  return (
    <>
      <footer className="probootstrap_section probootstrap-border-top">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-3">
              <h3 className="probootstrap_font-18 mb-3" style={{fontWeight:"bold"}}>Quick Links</h3>
              <ul className="list-unstyled">
                {items.map((obj) => {
                  return (
                    <li>
                      <a href="/" target="_blank" style={{fontWeight:"bold"}} onClick={(e)=>{
                        e.preventDefault()
                        navigate(obj.url)
                      }}>
                        {obj.name}
                      </a>
                    </li>
                  );
                })}

                {/* <li>
                  <a href="/" target="_blank">
                    About
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    Contact
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="col-md-5">
              <h2 className="probootstrap_font-18 mb-3" style={{color:"black", fontWeight:"900"}}>Contact Us</h2>
              <div style={{color:"black" ,fontWeight:"500"}}> {AboutUs.phone}</div>
              <div style={{color:"black" ,fontWeight:"500"}}>{AboutUs.phone2}</div>
              <div style={{color:"black" ,fontWeight:"500"}}>{AboutUs.email}</div>
              <div style={{color:"black" ,fontWeight:"500"}}>{AboutUs.address}</div>
            </div>
            {/* <div className="col-md-3">
              <h3 className="probootstrap_font-18 mb-3">Quick Links</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="/" target="_blank">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    About
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    Contact
                  </a>
                </li>
              </ul>
            </div> */}
            <div className="col-md-4">
              <h3 className="probootstrap_font-18 mb-3 text-center">Conect Now</h3>
              <div className="d-flex justify-content-between">
                <div>
                  <ReactWhatsapp
                    number={AboutUs.phone || AboutUs.phone2}
                    style={{ background: "none", border: "none" }}
                    message="Hai"
                  >
                    <FontAwesomeIcon
                      icon="fa-brands fa-square-whatsapp"
                      size="3x"
                      shake
                      
                      style={{ color: "#149056", cursor: "pointer" }}
                    />
                  </ReactWhatsapp>
                </div>
                <div
                  onClick={() => {
                    window.location.href = `mailto:${AboutUs.email}`;
                  }}
                >
                  <FontAwesomeIcon
                    size="3x"
                    icon="fa-solid fa-envelope"
                    shake
                    style={{ color: "#e04410", cursor: "pointer" }}
                  />
                </div>
                {/* <div>
                  <FontAwesomeIcon
                    icon="fa-brands fa-square-facebook"
                    size="3x"
                    shake
                    style={{ color: "#1959c8", cursor: "pointer" }}
                  />
                </div> */}
                <div>
                  <FontAwesomeIcon
                  onClick={()=>{
                    window.location.href=AboutUs.insta
                  }}
                    size="3x"
                    icon="fa-brands fa-square-instagram"
                    shake
                    style={{ color: "#bf1868", cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-md-12 text-center">
              <p className="probootstrap_font-14">
                © {new Date().getFullYear()}. All Rights Reserved. <br />
                {/* Designed &amp; Developed by{" "}
              <a href="https://probootstrap.com/" target="_blank">
                ProBootstrap
              </a>
              <small>
                {" "}
                (Don't remove credit link on this footer. See{" "}
                <a href="https://probootstrap.com/license/">license</a>)
              </small> */}
              </p>
              <p className="probootstrap_font-14">
                {/* Demo Images:{" "}
              <a href="https://unsplash.com/" target="_blank">
                Unsplash
              </a> */}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
