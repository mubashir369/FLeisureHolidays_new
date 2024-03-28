import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Button from "../component/Button/Button";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import packages1 from "../data/Packages.json";
import AboutUs from "../data/AboutUs.json";
import ReactWhatsapp from "react-whatsapp";
function PackageDetail() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const p = searchParams.get("p");
  const pk = searchParams.get("pk");
  let data = packages1.find((obj) => {
    return obj.top == p && obj.name == pk;
  });
  const Star = Array(5).fill("");
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, []);
  return (
    <>
      <Navbar />
      <section
        className="probootstrap-cover overflow-hidden relative"
        style={{
          backgroundImage: data.coverImg
            ? `url(${data.imagePath?data.imagePath:""}${data.coverImg})`
            : 'url("/assets/images/bg_1.jpg")',
          height: "400px",
        }}
        data-stellar-background-ratio="0.5"
        id="section-home"
      >
        <div className="overlay" />
        <div className="container">
          <div className="row align-items-center  ">
            <div className="col-md">
              {/* <img src="/Images/LogoOnly.png" alt="logo" /> */}
              <h2 className="heading mb-2 display-4 font-light probootstrap-animate">
                {data.name}
              </h2>
              <p
                style={{ color: "white" }}
                className="lead mb-5 probootstrap-animate"
              >
                {data.about}
              </p>

              <p />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div
          className="container mt-3 mb-3 p-3 shadow  border-secondary rounded text-center"
          style={{
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <blockquote className="">
            <p
              className="lead mb-4"
              style={{ color: "black", fontSize: "bold" }}
            >
              <em>{data.disc}</em>
            </p>
          </blockquote>
        </div>
      </section>

      <section className="probootstrap_section bg-light">
        <div className="container">
          {/* <div className="row text-center mb-5 probootstrap-animate">
      <div className="col-md-12">
        <h2 className="display-4 border-bottom probootstrap-section-heading">
          News
        </h2>
      </div>
    </div> */}
          <div className="row">
            <div className="col-md-6">
              <div className="media probootstrap-media d-flex align-items-stretch mb-4 probootstrap-animate">
                <div
                  className=""
                  // style={{ backgroundImage: "url(assets/images/img_1.jpg)" }}
                ></div>
                <div className="media-body">
                  {/* <span className="text-uppercase">January 1st 2018</span> */}
                  <h3 className="mb-3">Accommodation</h3>
                  <p>
                    <dl className="row">
                      <dt className="col-sm-3">Standard</dt>
                      <dd className="col-sm-9">
                        {Star.map((_, i) => {
                          return (
                            <>
                              <FontAwesomeIcon
                                icon="fa-solid fa-star"
                                style={
                                  i >= data.accommodation.standard
                                    ? { color: "#adadad" }
                                    : { color: "#f7bf05" }
                                }
                              />
                            </>
                          );
                        })}

                        {/* {data.accommodation.standard} Star */}
                      </dd>

                      {data.accommodation.hotels.map((ht) => {
                        if (ht.includes(":")) {
                          let newHt = ht.split(":");
                          return (
                            <>
                              <dt className="col-sm-3 text-dark">{newHt[0]}</dt>
                              <dd className="col-sm-9 text-dark">{newHt[1]}</dd>
                            </>
                          );
                        } else {
                          return (
                            <>
                              <dd className="col-sm-9 text-dark">{ht}</dd>
                            </>
                          );
                        }
                      })}
                    </dl>
                  </p>
                  {/* <p>
                    <a href="#">Read More</a>
                  </p> */}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className=" media probootstrap-media d-flex align-items-stretch mb-4 probootstrap-animate">
                <div
                  className=""
                  // style={{ backgroundImage: "url(assets/images/img_2.jpg)" }}
                ></div>
                <div className="media-body">
                  {/* <span className="text-uppercase">January 1st 2018</span> */}
                  {/* <h5 className="mb-3">Travel To United States Without Visa</h5> */}
                  <p>
                    <dl className="row">
                      {data.citys.map((ct) => {
                        return (
                          <>
                            <dt className="col-sm-3">{ct.name}</dt>
                            <dd className="col-sm-9">{ct.duration}</dd>
                          </>
                        );
                      })}
                    </dl>
                  </p>
                  {/* <p>
                    <a href="#">Read More</a>
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="probootstrap-section-half d-md-flex probootstrap-text mt-2">
        <div className="container mt-5"></div>
      </section>
      <div className="col-md-12 text-center mb-5 probootstrap-animate">
        <h2 className="display-4 border-bottom probootstrap-section-heading">
          ITINERARY
        </h2>
      </div>
      {!data?.itinerary || data?.itinerary?.length < 0
        ? "Work in process"
        : data.itinerary?.map((obj, i) => {
            return (
              <>
                <section
                  className="probootstrap-section-half d-md-flex probootstrap-text mt-2 "
                  id="section-about"
                  style={{ backgroundColor: "#eeeeee" }}
                >
                  <div
                    // className="probootstrap-image probootstrap-animate"
                    className={
                      (i + 1) % 2 == 0
                        ? "probootstrap-image probootstrap-animate"
                        : "probootstrap-image order-2 probootstrap-animate"
                    }
                    data-animate-effect="fadeIn"
                    style={{
                      backgroundImage: `url(${data.imagePath?data.imagePath:""}${obj.img?obj.img:data.img})`,
                      height: "500px",
                    }}
                  />
                  <div className="probootstrap-text">
                    <div
                      className="probootstrap-inner probootstrap-animate"
                      //   data-animate-effect="fadeInRight"
                      data-animate-effect={
                        (i + 1) % 2 == 0 ? "fadeInRight" : "fadeInLeft"
                      }
                    >
                      <button disabled className="btn btn-danger ">
                        {" "}
                        <b>Day {obj.day}</b>{" "}
                      </button>
                      <h2 className="heading mt-3 mb-4">{obj.city}</h2>
                      {Array.isArray(obj.disc) ? (
                        <>
                          <ul>
                            {obj.disc.map((item, index) => {
                              return (
                                <li key={index}>
                                  {" "}
                                  <p style={{ color: "black" }}>{item}</p>
                                </li>
                              );
                            })}
                          </ul>
                        </>
                      ) : (
                        <p style={{ color: "black" }}>{obj.disc}</p>
                      )}

                      {/* <p>
        <a href="/" className="btn btn-primary">
          Read More
        </a>
      </p> */}
                    </div>
                  </div>
                </section>
              </>
            );
          })}

      {data.inclusions && data.inclusions.length > 0 ? (
        <>
          <div className="col-md-12 text-center  mt-5 probootstrap-animate">
            <h2 className="display-4 border-bottom probootstrap-section-heading text-capitalized">
              Inclusions
            </h2>
          </div>
          <section className="probootstrap_section bg-light">
            <div className="container ">
              <ul className="" style={{ color: "black" }}>
                {data.inclusions.map((obj) => {
                  return (
                    <li style={{ fontWeight: "bold", fontSize: "15px" }}>
                      {obj}
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </>
      ) : (
        ""
      )}
      {data.exclusions && data.exclusions.length > 0 ? (
        <>
          <div className="col-md-12 text-center  mt-5 probootstrap-animate">
            <h2 className="display-4 border-bottom probootstrap-section-heading text-capitalized">
              Exclusions
            </h2>
          </div>
          <section className="probootstrap_section bg-light">
            <div className="container ">
              <ul className="" style={{ color: "black" }}>
                {data.exclusions.map((obj) => {
                  return (
                    <li style={{ fontWeight: "bold", fontSize: "15px" }}>
                      {obj}
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </>
      ) : (
        ""
      )}
      <div className="col-md-12 text-center mt-5 probootstrap-animate">
        <h2 className="display-4 border-bottom probootstrap-section-heading text-capitalized">
          Know More About This Package
        </h2>
      </div>
      <section className=" probootstrap_section bg-light">
        <div className="container">
          {/* <Button/> */}
          <div className="d-flex justify-content-around">
            <div className="">
              <ReactWhatsapp
                className="btn btn-outline-primary"
                number={AboutUs.phone || AboutUs.phone2}
                // style={{ background: "none", border: "none", color: "white" }}
                message={`Hi I want to know about your ${data.name} Package`}
              >
                Whatsapp
              </ReactWhatsapp>
            </div>
            <div className="">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = `tel:${
                    AboutUs.phone || AboutUs.phone1
                  }`;
                }}
                className="btn btn-outline-dark"
              >
                Call Now
              </button>
            </div>
            <div className="">
              <button
                className="btn btn-outline-danger"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = `mailto:${AboutUs.email}`;
                }}
              >
                {" "}
                Send Mail{" "}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default PackageDetail;
