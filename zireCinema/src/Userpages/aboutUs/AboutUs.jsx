import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import Footer from "../../components/Footer";
import Navigationbar from "../../components/Navigationbar";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import cinemaAbout1 from "../../images/aboutUs1.jpg";
import cinemaAbout2 from "../../images/aboutUs2.jpg";
import cinemaAbout3 from "../../images/aboutUs3.jpg";
import cinemaAbout4 from "../../images/aboutUs4.jpg";
import cinemaChairs from "../../images/cinemaChairs.jpg";

const AboutUs = () => {
  return (
    <div>
      <div className="navHeaderContainer">
        <Navigationbar />
      </div>
      <div className="aboutUsContainer">
        <div className="container">
          <div className="aboutHeader">
            <h1>ZIRE CINEMA</h1>

            <p>
              Film nümayişləri, korporativ və digər tədbirlər üçün fəaliyyət
              göstərən Zire Cinema zalı, müasir tələblərə cavab verən ən sox
              texnologiyalar ilə təchiz olunub. Zalda, dünya premyerası
              filmlərinin nümayişi və izləyicilərin rahatlığı üçün yüksək şərait
              yaradılıb.
            </p>

            <p>
              275 nəfərlik zalda ən son filmlərin nümayişi ilə yanaşı korporativ
              və digər tədbirlərin, sərgilərin və təqdimatların keçirilməsi də
              mümkündür.
            </p>
          </div>
          <div className="aboutMain">
            <div className="aboutMainLeft">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                // autoplay={{
                //   delay: 2500,
                //   disableOnInteraction: false,
                // }}
                speed={1500}
                
                navigation={true}
                modules={[Autoplay, Navigation]}
                loop={true}
                className="aboutCarousel"
              >
                <SwiperSlide>
                  <img src={cinemaAbout1} alt="Zire Ekopark cinema images" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={cinemaAbout2} alt="Zire Ekopark cinema images" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={cinemaAbout3} alt="Zire Ekopark cinema images" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={cinemaAbout4} alt="Zire Ekopark cinema images" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="aboutMainRight">
              <img src={cinemaChairs} alt="Zire ekopark cinema chairs " />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
