import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Tab, Tabs } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import Navbar from "../../components/Navigationbar";
import Footer from "../../components/Footer";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import cinemaAbout1 from "../../images/aboutUs1.jpg";
import cinemaAbout2 from "../../images/aboutUs2.jpg";
import cinemaAbout3 from "../../images/aboutUs3.jpg";
import cinemaAbout4 from "../../images/aboutUs4.jpg";

const Home = () => {
  //!State
  const [movies, setMovies] = useState([]);
  let { moviesId } = useParams();

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    fetch("http://localhost:3000/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  };

  return (
    <div>
      <section>
        <header className="homeHeaderContainer">
          <div className="container">
            <Navbar />

            <Swiper
              spaceBetween={1000}
              centeredSlides={true}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              speed={2000}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              loop={true}
              className="mySwiper"
            >
              {movies.map((movie) => {
                return (
                  <SwiperSlide>
                    <div className="carouselComponent">
                      <div className="carouselComponentLeftSide">
                        <iframe
                          src={movie.Trailer}
                          frameborder="0"
                          allow="accelerometer; autoplay;"
                          allowfullscreen="false"
                          title="Embedded youtube"
                        ></iframe>
                      </div>
                      <div className="carouselComponentRightSide">
                        <div>
                          <Link to={`/movies/${movie.id}`}>
                            <h4>{movie.Title}</h4>
                          </Link>
                          <p>{movie.Plot}</p>
                        </div>
                        <div className="carouselComponentMovieDetails">
                          <div>
                            <span>Yaş həddi</span>
                            <p>{movie.Year}</p>
                          </div>
                          <div>
                            <span>Ölkə</span>
                            <p>{movie.Country}</p>
                          </div>
                          <div>
                            <span>Dil</span>
                            <p>{movie.Language}</p>
                          </div>
                          <div>
                            <span>İl</span>
                            <p>{movie.Year}</p>
                          </div>
                          <div>
                            <span>Janr</span>
                            <p>{movie.Genre}</p>
                          </div>
                          <div>
                            <span>Cədvəl</span>
                            <p>{movie.Released}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </header>
      </section>

      <section className="mb-5 mt-5 pb-5" id="films">
        <div className="container">
          <Tabs
            defaultActiveKey="today"
            transition={false}
            id="noanim-tab-example"
            className="mb-5  HomePage-cinema-tabs"
          >
            <Tab eventKey="today" title="BU GÜN">
              <div className="HomeMovieCardContainer">
                {movies.map((movie) => {
                  return (
                    <div className="HomeMovieCard">
                      <div
                        className="HomeMovieCardImage"
                        style={{ backgroundImage: `url(${movie.Images})` }}
                      ></div>
                      <div className="HomeMovieCardInfo">
                        <ul>
                          <li>
                            <label class="data">Yaş</label>
                            <span class="desc">18+</span>
                          </li>

                          <li>
                            <label class="data">Dil</label>
                            <span class="desc">Rus</span>
                          </li>

                          <li>
                            <label class="data">Janr</label>
                            <span class="desc">Triller</span>
                          </li>

                          <li>
                            <label class="data">İl</label>
                            <span class="desc">2023</span>
                          </li>

                          <li>
                            <label class="data">Ölkə</label>
                            <span class="desc">ABŞ</span>
                          </li>

                          <li>
                            <label class="data">Cədvəl</label>
                            <span class="desc">23.03.23 - 12.04.23</span>
                          </li>
                        </ul>
                      </div>
                      <a href={`/movies/${movie.id}`}>
                        <h5>{movie.Title}</h5>
                      </a>
                    </div>
                  );
                })}
              </div>
            </Tab>
            <Tab eventKey="comingsoon" title=" TEZLİKLƏ">
              <div className="HomeMovieCardContainer"></div>
            </Tab>
          </Tabs>
        </div>
      </section>

      <section className="mt-5 mb-5 pt-5 pb-4" id="seans">
        <div className="container">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th className="thfirst" scope="col">
                    FİLM
                  </th>
                  <th scope="col">SEANS</th>
                  <th scope="col">FORMAT</th>
                  <th className="thlast" scope="col">
                    BİLET
                  </th>
                </tr>
              </thead>

              <tbody>
                {movies.map((movie) => {
                  return (
                    <tr className="table-responsive_row">
                      <td className="table-responsive_name">
                        <a>{movie.Title}</a>
                      </td>

                      <td className="table-responsive_session">
                        {movie.Title}
                      </td>

                      <td className="formats table-responsive_format">
                        <span>{movie.Title}</span>
                        <span>{movie.Title}</span>
                      </td>

                      <td className="tdlast table-responsive_price">3 AZN</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <div className="aboutUsContainer" id="cinema">
        <div className="container">
          <div className="homeLastSection">
            <div className="homeLastSectionLeft">
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
                className="homeLastCarousel"
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
            <div className="homeLastSectionRight">
              <h4>ZIRE CINEMA</h4>

              <p>
                Burada, 300 nəfərlik konsert, tədbir və film nümayişi üçün 3D
                kinozal fəaliyyət göstərir. Kinozal, müasir tələblərə cavab
                verən ən sox texnologiyalar ilə təchiz olunub. Zalda, ən son
                filmlərin nümayişi və izləyicilərin rahatlığı üçün yüksək şərait
                yaradılıb.
              </p>

              <a href="/aboutus" className="homeLastSectionBtn">
                DAHA ÇOX
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <section className="pb-5 pt-3 mt-5 mb-5">
	<div className="container banner-bottom">
		<img className="gencol" src="img/gencol.jpg">
		<img className="gencolmini" src="img/gencolmini.jpg">
	</div>
</section> */}
      <Footer />
    </div>
  );
};

export default Home;
