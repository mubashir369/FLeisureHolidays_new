import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import items from '../data/NavBar.json'
function Navbar({ active }) {
  const navigate = useNavigate();
  const location = useLocation();
  let $ = window.$;
  if (!active) {
    active = "Home";
  }
 
  var contentWayPoint = function () {
    var i = 0;
    if ($(".probootstrap-animate").length > 0) {
      $(".probootstrap-animate").waypoint(
        function (direction) {
          if (
            direction === "down" &&
            !$(this.element).hasClass("probootstrap-animated")
          ) {
            i++;

            $(this.element).addClass("item-animate");
            setTimeout(function () {
              $("body .probootstrap-animate.item-animate").each(function (k) {
                var el = $(this);
                setTimeout(
                  function () {
                    var effect = el.data("animate-effect");
                    if (effect === "fadeIn") {
                      el.addClass("fadeIn probootstrap-animated");
                    } else if (effect === "fadeInLeft") {
                      el.addClass("fadeInLeft probootstrap-animated");
                    } else if (effect === "fadeInRight") {
                      el.addClass("fadeInRight probootstrap-animated");
                    } else {
                      el.addClass("fadeInUp probootstrap-animated");
                    }
                    el.removeClass("item-animate");
                  },
                  k * 50,
                  "easeInOutExpo"
                );
              });
            }, 50);
          }
        },
        { offset: "95%" }
      );
    }
  };
  // const items = [
  //   {
  //     name: "Home",
  //     url: "/",
  //   },
  //   {
  //     name: "About",
  //     url: "/about",
  //   },
  //   {
  //     name: "All Packages",
  //     url: "/allPackages",
  //   },
  //   {
  //     name: "Services",
  //     url: "/service",
  //   },
  // ];
  useEffect(() => {
    contentWayPoint();
    // window.scrollTo({ behavior: "smooth", top: 0 });
  }, [location]);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark probootstrap_navbar"
        id="probootstrap-navbar"
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            {/* <img src="Images/mainLogo.png" style={{width:"100px",height:"50px"}} alt="logo" /> */}
            Fleisure Holidays
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#probootstrap-menu"
            aria-controls="probootstrap-menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i className="ion-navicon" />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="probootstrap-menu">
            <ul className="navbar-nav ml-auto">
              {items.map((obj) => {
                return (
                  <li className={`nav-item ${active==obj.name?'active':""}`}>
                    <a
                      className="nav-link"
                      href=""
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(obj.url);
                      }}
                    >
                      {obj.name}
                    </a>
                  </li>
                );
              })}
              <li className={`nav-item ${active=="Services"?'active':""}`}>
                    <a
                      className="nav-link"
                      href="/#services"
                    
                   
                    >
                      Services
                    </a>
                  </li>

              {/* <li className="nav-item ">
                <a className="nav-link" href="/" onClick={(e)=>{
                  e.preventDefault()
                  navigate('/about')
                }}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" onClick={(e)=>{
                  e.preventDefault()
                  navigate('/allPackages')
                }}>
                  All Packages
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" onClick={(e)=>{
                  e.preventDefault()
                  navigate('/service')
                }}>
                 Services
                </a>
              </li> */}
              {/* <li className="nav-item">
              <a className="nav-link" href="travel.html">
                Travel With Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">
                Contact
              </a>
            </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
