import React from "react";

import gbr1 from "../../assets/Catagory/baju1.jpg";
import gbr2 from "../../assets/Catagory/celana.jpeg";
import gbr3 from "../../assets/Catagory/jeket.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carosel.modul.css";

// import required modules
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { FreeMode, Pagination, Navigation } from "swiper/modules";

const Carousel = () => {
  return (
    <>
      <div className=" container my-5">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          centeredSlides={false}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            320: {
              centeredSlides: true,
              freeMode: false,
              slidesPerView: 1,
              spaceBetween: 10,
            },
            425: {
              centeredSlides: false,
              slidesPerView: "auto",
              spaceBetween: 20,
            },
          }}
          navigation={true}
          modules={[FreeMode, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="swiper-slide-trend">
            <div className="fashion-display position-relative">
              <img className="fashion-display" src={gbr1} alt="" />
              <span className="  position-absolute top-50 start-50 translate-middle fw-bolder text-light fs-3">White Edition</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-trend">
            <div className="fashion-display position-relative">
              <img className="fashion-display" src={gbr2} alt="" />
              <span className="position-absolute top-50 start-50 translate-middle fw-bolder text-light fs-3">Mix Edition</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-trend">
            <div className="fashion-display position-relative">
              <img className="fashion-display" src={gbr3} alt="" />
              <span className="position-absolute top-50 start-50 translate-middle fw-bolder text-light fs-3">Cream Edition</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-trend">
            <div className="fashion-display position-relative">
              <img className="fashion-display" src={gbr1} alt="" />
              <span className="position-absolute top-50 start-50 translate-middle fw-bolder text-light fs-3">White Edition</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
