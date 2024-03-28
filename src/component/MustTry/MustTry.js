import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import './MustTry.css'
function MustTry({data}) {
//   let data = Array(10).fill(0);
  const swiperRef = useRef(null); 
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
  const navigate=useNavigate()
  return (
    <section className="probootstrap_section" id="section-city-guides">
      <div className="">
        <div className="row text-center mb-5 probootsrap-animate">
          <div className="col-md-12">
            <h2 className="display-4 border-bottom probootstrap-section-heading">
              MustTry Packages
            </h2>
          </div>
        </div>
        <Swiper
         spaceBetween={50}
         slidesPerView={4}
         onSlideChange={() => console.log("slide change")}
         navigation={{
           // Include navigation option here
           nextEl: ".swiper-button-next",
           prevEl: ".swiper-button-prev",
         }}
         autoplay={{ delay: 1000, disableOnInteraction: false }}
         breakpoints={{
           // Define different settings for different screen sizes
           350: {
             slidesPerView: 1,
             spaceBetween: 20,
             autoplay: { delay: 2000, disableOnInteraction: false },
           },
           992: {
             slidesPerView: 2,
             spaceBetween: 30,
             autoplay: { delay: 2500, disableOnInteraction: false },
           },
           1200: {
             slidesPerView: 4,
             spaceBetween: 50,
             autoplay: { delay: 3000, disableOnInteraction: false },
           },
         }}
        >
          {data.map((obj, i) => {
            return (
              <>
                <SwiperSlide>
                <div className="containermustTry" onClick={()=>{
navigate(`/package_details?p=${obj.top}&pk=${obj.name}`)
                }}>
      <div className="card-left">
    <div className="card-image">
      <img src={obj.img} />
    </div>
    <div className="card-text">
      <h5><b>{obj.name}</b></h5>
      <p>{obj.disc}</p>
    </div>
  </div>
</div>
                
                </SwiperSlide>
              </>
            );
          })}
           <div className="swiper-button-next" onClick={handleNext}>
              <i className="fas fa-chevron-right"></i>
            </div>
            <div className="swiper-button-prev" onClick={handlePrev}>
              <i className="fas fa-chevron-left"></i>
            </div>
        </Swiper>
      </div>



      <>
      
      {/* <div className="containermustTry">
      <div className="card-left">
    <div className="card-image">
      <img src="https://images.pexels.com/photos/220072/pexels-photo-220072.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
    </div>
    <div className="card-text">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
</div> */}

      
      </>
    </section>
  );
}

export default MustTry;
