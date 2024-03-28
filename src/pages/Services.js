import React from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

function Services() {
  return (
   <>
   <Navbar active={'Services'} />
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
                Services
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
   <Footer/>    
   </>
  )
}

export default Services