import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import topPlaces from "../data/TopPlaces.json";
import packages from '../data/Packages.json'
function Packages() {
  const navigate = useNavigate();
  const location = useLocation();
  const place = location.pathname.split("/").pop().split("%20").join(" ");
 let data=topPlaces.find((obj) => obj.name == place);
 let pkgs=packages.filter((obj)=>obj.top==place)
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    
  }, []);
  return (
    <>
      <Navbar />
      {/* END nav */}
      <section
        className="probootstrap-cover overflow-hidden relative"
        style={{
          backgroundImage: data.coverImg
            ? `url(${data.coverImg})`
            : 'url("/assets/images/bg_1.jpg")',
          height: "350px",
        }}
        data-stellar-background-ratio="0.5"
        id="section-home"
      >
        <div className="overlay" />
        <div className="container">
          <div className="row align-items-center text-center ">
            <div className="col-md">
              {/* <img src="/Images/LogoOnly.png" alt="logo" /> */}
              <h2
                className="heading mb-2 display-4 font-light probootstrap-animate"
                style={{ textTransform: "uppercase" }}
              >
                <b>{data.name}</b>
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
      {/* END section */}
      <section className="probootstrap_section" id="section-city-guides">
        <div className="container">
          <div className="row mb-3">
            {pkgs.map((pk, i) => {
              return (
                <div className="col-md-6" key={i}>
                  <div className="media probootstrap-media d-flex align-items-stretch mb-4 probootstrap-animate">
                    <div
                      className="probootstrap-media-image"
                      style={{
                        backgroundImage: pk.img
                          ? `url(${pk.img})`
                          : "url(/assets/images/img_4.jpg)",
                      }}
                    ></div>
                    <div className="media-body">
                      <h5 className="mb-3">
                        {i + 1}. {pk.name}
                      </h5>
                      <p>
                        {pk.disc}
                        <br />
                        <b>From City : </b>
                        {pk.fromCity}
                      </p>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(`/package_details?p=${place}&pk=${pk.name}`);
                        }}
                        className="btn btn-success"
                      >
                        Know More
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <div className="row">
              <div className="col-md-6">
                <div className="media probootstrap-media d-flex align-items-stretch mb-4 probootstrap-animate">
                  <div
                    className="probootstrap-media-image"
                    style={{ backgroundImage: "url(assets/images/img_1.jpg)" }}
                  ></div>
                  <div className="media-body">
                    <h5 className="mb-3">01. Service Title Here</h5>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.{" "}
                    </p>
                  </div>
                </div>
                <div className="media probootstrap-media d-flex align-items-stretch mb-4 probootstrap-animate">
                  <div
                    className="probootstrap-media-image"
                    style={{ backgroundImage: "url(assets/images/img_2.jpg)" }}
                  ></div>
                  <div className="media-body">
                    <h5 className="mb-3">02. Service Title Here</h5>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="media probootstrap-media d-flex align-items-stretch mb-4 probootstrap-animate">
                  <div
                    className="probootstrap-media-image"
                    style={{ backgroundImage: "url(assets/images/img_4.jpg)" }}
                  ></div>
                  <div className="media-body">
                    <h5 className="mb-3">03. Service Title Here</h5>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.{" "}
                    </p>
                  </div>
                </div>
                <div className="media probootstrap-media d-flex align-items-stretch mb-4 probootstrap-animate">
                  <div
                    className="probootstrap-media-image"
                    style={{ backgroundImage: "url(assets/images/img_5.jpg)" }}
                  ></div>
                  <div className="media-body">
                    <h5 className="mb-3">04. Service Title Here</h5>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
        </div>
      </section>
      {/* END section */}
      {/* <section className="probootstrap_section">
        <div className="container">
          <div className="row text-center mb-5 probootstrap-animate">
            <div className="col-md-12">
              <h2 className="display-4 border-bottom probootstrap-section-heading">
                Popular Landmarks
              </h2>
            </div>
          </div>
          <div className="row probootstrap-animate">
            <div className="col-md-12">
              <div className="owl-carousel js-owl-carousel">
                <a className="probootstrap-slide" href="#">
                  <span className="flaticon-teatro-de-la-caridad" />
                  <em>Teatro de la Caridad</em>
                </a>
                <a className="probootstrap-slide" href="#">
                  <span className="flaticon-royal-museum-of-the-armed-forces" />
                  <em>Royal Museum of the Armed Forces</em>
                </a>
                <a className="probootstrap-slide" href="#">
                  <span className="flaticon-parthenon" />
                  <em>Parthenon</em>
                </a>
                <a className="probootstrap-slide" href="#">
                  <span className="flaticon-marina-bay-sands" />
                  <em>Marina Bay Sands</em>
                </a>
                <a className="probootstrap-slide" href="#">
                  <span className="flaticon-samarra-minaret" />
                  <em>Samarra Minaret</em>
                </a>
                <a className="probootstrap-slide" href="#">
                  <span className="flaticon-chiang-kai-shek-memorial" />
                  <em>Chiang Kai Shek Memorial</em>
                </a>
                <a className="probootstrap-slide" href="#">
                  <span className="flaticon-heuvelse-kerk-tilburg" />
                  <em>Heuvelse Kerk Tilburg</em>
                </a>
                <a className="probootstrap-slide" href="#">
                  <span className="flaticon-cathedral-of-cordoba" />
                  <em>Cathedral of Cordoba</em>
                </a>
                <a className="probootstrap-slide" href="#">
                  <span className="flaticon-london-bridge" />
                  <em>London Bridge</em>
                </a>
                <a className="probootstrap-slide" href="#">
                  <span className="flaticon-taj-mahal" />
                  <em>Taj Mahal</em>
                </a>
                <a className="probootstrap-slide" href="#">
                  <span className="flaticon-leaning-tower-of-pisa" />
                  <em>Leaning Tower of Pisa</em>
                </a>
                <a className="probootstrap-slide" href="#">
                  <span className="flaticon-burj-al-arab" />
                  <em>Burj al Arab</em>
                </a>
                <a className="probootstrap-slide" href="#">
                  <span className="flaticon-gate-of-india" />
                  <em>Gate of India</em>
                </a>
                <a className="probootstrap-slide" href="#">
                  <span className="flaticon-osaka-castle" />
                  <em>Osaka Castle</em>
                </a>
                <a className="probootstrap-slide" href="#">
                  <span className="flaticon-statue-of-liberty" />
                  <em>Statue of Liberty</em>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* END section */}
      {/* <section
        className="probootstrap_section"
        id="section-feature-testimonial"
      >
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-12 text-center mb-5 probootstrap-animate">
              <h2 className="display-4 border-bottom probootstrap-section-heading">
                Why we Love Places
              </h2>
              <blockquote className="">
                <p className="lead mb-4">
                  <em>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean. A small
                    river named Duden flows by their place and supplies it with
                    the necessary regelialia. It is a paradisematic country, in
                    which roasted parts of sentences fly into your mouth.
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
      <Footer />
    </>
  );
}

export default Packages;
