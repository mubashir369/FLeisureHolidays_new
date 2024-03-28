import React, { useEffect, useRef, useState } from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import TopPlaces from "../component/TopPlaces";
import Services from "../data/Services.json";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import AboutUs from "../data/AboutUs.json";
import packages from '../data/Packages.json'
import "swiper/swiper-bundle.min.css";
import "swiper/css";
import ReactWhatsapp from "react-whatsapp";
import { useLocation } from "react-router-dom";
import MustTry from "../component/MustTry/MustTry";
SwiperCore.use([Navigation]);
function Home() {
  const swiperRef = useRef(null); // Ref to access Swiper instance
  const location = useLocation();
  const [active, setActive] = useState("Home");
  console.log(location);
  const mustTry=packages.filter((obj)=>obj.mustTry==1)
  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext(); // Slide to next slide
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev(); // Slide to previous slide
    }
  };
  //   const topPlaces = [
  //     {
  //       img: "assets/images/img_1.jpg",
  //       name: "Kashmir Lakes and Pines",
  //     },
  //     {
  //       img: "assets/images/img_2.jpg",
  //       name: "Captivating Ladakh",
  //     },
  //     {
  //       img: "assets/images/img_3.jpg",
  //       name: "Charming Azerbaijan",
  //     },
  //     {
  //       img: "assets/images/img_4.jpg",
  //       name: "Amsterdam and Paris",
  //     },
  //     {
  //       img: "assets/images/img_5.jpg",
  //       name: "Scenic Switzerland",
  //     },
  //     {
  //       img: "assets/images/img_1.jpg",
  //       name: "Glimpses of Sydney and Melbourne",
  //     },
  //     {
  //       img: "assets/images/img_2.jpg",
  //       name: "Highlights of Georgia",
  //     },
  //     {
  //       img: "assets/images/img_3.jpg",
  //       name: "A Short Break in Cairo",
  //     },
  //     {
  //       img: "assets/images/img_4.jpg",
  //       name: "Best of Turkey",
  //     },
  //     {
  //       img: "assets/images/img_5.jpg",
  //       name: "Enchanting Rajasthan",
  //     },
  //     {
  //       img: "assets/images/img_1.jpg",
  //       name: "Golden Triangle-III",
  //     },
  //     {
  //       img: "assets/images/img_2.jpg",
  //       name: "Splendid Ladakh ",
  //     },
  //     {
  //       img: "assets/images/img_3.jpg",
  //       name: "Mesmerizing Maldives with Medhufushi Island Resort",
  //     },
  //     {
  //       img: "assets/images/img_4.jpg",
  //       name: "Highlights of Vietnam",
  //     },
  //     {
  //       img: "assets/images/img_5.jpg",
  //       name: "Fascinating Singapore",
  //     },
  //     {
  //       img: "assets/images/img_1.jpg",
  //       name: "Cost Saver Kuala Lumpur with Genting Highlands",
  //     },
  //     {
  //       img: "assets/images/img_2.jpg",
  //       name: "Blissful Bali",
  //     },
  //     {
  //       img: "assets/images/img_3.jpg",
  //       name: "Best of Thailand with Phuket",
  //     },
  //     {
  //       img: "assets/images/img_4.jpg",
  //       name: "Simply Dubai",
  //     },
  //   ];
  console.log(location);
  useEffect(() => {
    if (location.hash == "#services") {
      window.location.href = "#services";
      setActive("Services");
    } else {
      setActive("Home");
      window.scrollTo({ behavior: "smooth", top: 0 });
    }
  }, [location]);

  return (
    <>
      <Navbar active={active} />
      {/* END nav */}
      <section
        className="probootstrap-cover overflow-hidden relative"
        style={{ backgroundImage: 'url("assets/images/bg_1.jpg")' }}
        data-stellar-background-ratio="0.5"
        id="section-home"
      >
        <div className="overlay" />
        <div className="container">
          <div className="row align-items-center text-center">
            <div className="col-md">
              <img src="Images/LogoOnly.png" alt="logo" />
              <h2 className="heading mb-2 display-4 font-light probootstrap-animate">
                Fleisure Holidays Pvt Ltd
                <h4 style={{ color: "white" }}>FLY WITH ALL YOUR HEART</h4>
              </h2>
              <p className="lead mb-5 probootstrap-animate"></p>
              {/* <a
              href="https://themewagon.com/theme_tag/free/"
              target="_blank"
              role="button"
              className="btn btn-primary p-3 mr-3 pl-5 pr-5 text-uppercase d-lg-inline d-md-inline d-sm-block d-block mb-3"
            >
              Know More
            </a> */}
              <p />
            </div>
          </div>
        </div>
      </section>
      <MustTry
      data={mustTry}
      />
      {/* END section */}
      <TopPlaces />
      {/* <section className="probootstrap_section" id="section-feature-testimonial">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-12 text-center mb-5 probootstrap-animate">
            <h2 className="display-4 border-bottom probootstrap-section-heading">
              Why we Love Places
            </h2>
            <blockquote className="">
              <p className="lead mb-4">
                <em>
                  Far far away, behind the word mountains, far from the countries
                  Vokalia and Consonantia, there live the blind texts. Separated
                  they live in Bookmarksgrove right at the coast of the Semantics,
                  a large language ocean. A small river named Duden flows by their
                  place and supplies it with the necessary regelialia. It is a
                  paradisematic country, in which roasted parts of sentences fly
                  into your mouth.
                </em>
              </p>
              <p className="probootstrap-author">
                <a href="https://probootstrap.com/" target="_blank">
                  <img
                    src="assets/images/person_1.jpg"
                    alt="Free Template by ProBootstrap.com"
                    className="rounded-circle"
                  />
                  <span className="probootstrap-name">James Smith</span>
                  <span className="probootstrap-title">
                    Chief Executive Officer
                  </span>
                </a>
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section> */}
      {/* END section */}
      <section className="probootstrap_section" id="services">
        <div className="container">
          <div className="row text-center mb-5 probootstrap-animate">
            <div className="col-md-12">
              <h2 className="display-4 border-bottom probootstrap-section-heading">
                More Services
              </h2>
            </div>
          </div>
          <div className="row mb-4 d-flex justify-content-center " >
            {Services.map((obj, i) => {
              return (
                <>
                  <div className="col-lg-4 col-md-6 probootstrap-animate mb-3 ">
                  <div className="media probootstrap-media d-block align-items-stretch mb-4 probootstrap-animate">
                        <img src={obj.img} alt="img" className="img-fluid" />
                        <div className="media-body">
                          <h5 className="mb-3">
                            {i + 1}. {obj.name}
                          </h5>
                          <p className="">
                            {/* <h5 className="text-center" >OR</h5> */}
                            {/* <button className="btn btn-success">Contact us</button> */}
                          </p>
                          <div>
                            <ReactWhatsapp
                              number={`${AboutUs.phone}`}
                              style={{ background: "none", border: "none" }}
                              message={`Hai I want to know about your ${obj.name} Service`}
                            >
                              <button className="btn btn-info w-100">
                                Contact us
                              </button>
                              <br />
                            </ReactWhatsapp>
                          </div>
                        </div>
                      </div>
                  </div>
                </>
              );
            })}
          </div>

          
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
