import React, { useEffect } from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

function About() {
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, []);
  return (
    <>
      <Navbar active={"About"} />
      <section
        className="probootstrap-cover overflow-hidden relative"
        style={{
          backgroundImage: 'url("/assets/images/bg_1.jpg")',
          height: "320px",
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
                About
              </h2>
              {/* <p
                style={{ color: "white" }}
                className="lead mb-5 probootstrap-animate"
              >
                {data.about}
              </p> */}

              <p />
            </div>
          </div>
        </div>
      </section>
      <section className="probootstrap_section bg-light" id="section-contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6 probootstrap-animate"></div>
            <div className="col-md-12 probootstrap-animate text-center">
              <p className="mb-3" style={{color:"black"}}>
              Hola !! We are  a private limited company that specializes in providing unique and customized travel experiences for our clients.
              </p>
              <p className="mb-3" style={{color:"black"}}>
              We understand that every traveler has different preferences and needs, and we work closely with each of our clients to design itineraries that meet their individual requirements. Whether you are looking for a romantic honeymoon getaway, a family vacation, or an adventure-packed trip, we have the expertise to make your travel dreams a reality.
              </p>
              <p className="mb-3" style={{color:"black"}}>
              Our team of experienced travel experts are dedicated to providing personalized service, attention to detail, and expert guidance to ensure that every aspect of your trip is seamless and stress-free. We take care of all the logistics, including transportation, accommodation, activities, and dining, so that you can sit back, relax, and enjoy your journey.
              </p>
              <p className="mb-3" style={{color:"black"}}>
              At our travel agency, we believe that travel should not only be enjoyable, but also responsible and sustainable. That's why we prioritize eco-friendly and socially responsible travel options, and encourage our clients to do the same.
              </p>
              <p className="mb-3" style={{color:"black"}}>
              So, whether you're planning a solo adventure or a group trip, we are here to help you create unforgettable memories that will last a lifetime. Get in touch with us today to start planning your next adventure!
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
