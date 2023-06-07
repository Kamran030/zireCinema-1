import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import Footer from "../components/Footer";
import Navigationbar from "../components/Navigationbar";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSelector } from "react-redux";

const AboutUs = () => {
  const activeLangTitles = useSelector((state) => state.lang.activeLangTitles);

  return (
    <div>
      <div className="navHeaderContainer">
        <Navigationbar />
      </div>
      <div className="aboutUsContainer">
        <div className="container">
          <div className="aboutHeader">
            <h1>{activeLangTitles.aboutPageHeader}</h1>

            <p>{activeLangTitles.aboutPageTopInfo}</p>

            <p>{activeLangTitles.aboutPageMainInfo}</p>
          </div>
          <div className="aboutMain">
            <div className="aboutMainLeft">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                speed={1500}
                navigation={true}
                modules={[Autoplay, Navigation]}
                loop={true}
                className="aboutCarousel"
              >
                <SwiperSlide>
                  <img
                    src="https://www.zirecinema.az/img/cinema/1.jpg"
                    alt="Zire Ekopark cinema images"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://www.zirecinema.az/img/cinema/2.jpg"
                    alt="Zire Ekopark cinema images"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://www.zirecinema.az/img/cinema/3.jpg"
                    alt="Zire Ekopark cinema images"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://www.zirecinema.az/img/cinema/4.jpg"
                    alt="Zire Ekopark cinema images"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="aboutMainRight">
              <img
                src="https://www.zirecinema.az/img/cinema.jpg"
                alt="Zire ekopark cinema chairs "
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
