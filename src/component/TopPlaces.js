import React from "react";
import topPlaces from "../data/TopPlaces.json";
import { useNavigate } from "react-router-dom";
function TopPlaces() {
  const navigate = useNavigate();
  console.log(window.location.host);
  return (
    <>
      <section className="probootstrap_section" id="section-city-guides">
        <div className="container">
          <div className="row text-center mb-5 probootstrap-animate">
            <div className="col-md-12">
              <h2 className="display-4 border-bottom probootstrap-section-heading">
                Top Places Around The World
              </h2>
            </div>
          </div>
          <div className="row mb-4 d-flex justify-content-center " >
            {topPlaces.map((place, index) => {
              return (
                <>
                  <div className="col-lg-4 col-md-6 probootstrap-animate mb-3 ">
                    <a
                      href="#"
                      className="probootstrap-thumbnail"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(`/packages/${place.name}`);
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
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default TopPlaces;
