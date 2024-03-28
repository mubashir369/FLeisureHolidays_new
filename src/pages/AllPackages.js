import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import TopPlaces from "../data/TopPlaces.json";
import packages1 from "../data/Packages.json";
import Card from "../component/Card/Card";
function AllPackages() {
  const [rnd, setRnd] = useState(0);
  const navigate = useNavigate();
  const packages = TopPlaces.map((obj) => {
    return obj.package;
  }).filter((fil) => Array.isArray(fil));
  const AllPkg = packages1;

  function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * AllPkg?.length);
    setRnd(randomNumber);
  }
  useEffect(() => {
    generateRandomNumber();
    const interval = setInterval(generateRandomNumber, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, []);
  return (
    <>
      <Navbar active={"All Packages"} />
      <section
        className="probootstrap-cover overflow-hidden relative"
        style={{
          backgroundImage: `url("${AllPkg[isNaN(rnd) ? 0 : rnd].coverImg}")`,
        }}
        data-stellar-background-ratio="0.5"
        id="section-home"
      >
        <div className="overlay" />
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-md">
              {/* <img src="/Images/LogoOnly.png" alt="logo" /> */}
              <h2 className="probootstrap-animate">
                {AllPkg[isNaN(rnd) ? 0 : rnd].name}
              </h2>
              <button
                className="btn btn-success"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(
                    `/package_details?p=${
                      AllPkg[isNaN(rnd) ? 0 : rnd].top
                    }&pk=${AllPkg[isNaN(rnd) ? 0 : rnd].name}`
                  );
                }}
              >
                More Details
              </button>
              {/* <p
                style={{ color: "white" }}
                className="lead mb-5 probootstrap-animate"
              >
                {data.about}
              </p> */}

              <p />
            </div>
            <div className="col-md">
              {/* <h2 className="heading mb-2 display-4 font-light probootstrap-animate">
                All Packages
              </h2> */}
            </div>
          </div>
        </div>
      </section>
      <section className="probootstrap_section">
        <div className="container">
          <div className="row text-center mb-5 probootstrap-animate">
            <div className="col-md-12">
              <h2 className="display-4 border-bottom probootstrap-section-heading">
                All Packages
              </h2>
            </div>
          </div>
          <div className="row mb-4 gap-1">
            {/* {AllPkg.map((place, index) => {
              return (
                <>
                  <div className="col-lg-3 col-md-6 probootstrap-animate mb-3">
                    <a
                      href="#"
                      className="probootstrap-thumbnail"
                      onClick={(e) => {
                        e.preventDefault();
                        // navigate(`/packages/${place.name}`);
                        navigate(`/package_details?p=${place.top}&pk=${place.name}`);
                      }}
                    >
                      <img src={place.img} alt="img" className="img-fluid" />
                      <div className="probootstrap-text">
                        <h3>{place.name}</h3>
                      </div>
                    </a>
                  </div>
                </>
              );
            })} */}
            {AllPkg.map((place, index) => {
              return (
                <div className="col-lg-4 col-md-6 mb-3">
                  <Card 
                  heading={place.name}
                  img={place.img}
                  disc={place.disc}
                  url={`/package_details?p=${place.top}&pk=${place.name}`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AllPackages;
