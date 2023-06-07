import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Tab, Tabs, Table } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import parser from "html-react-parser";
import Navbar from "../components/Navigationbar";
import Footer from "../components/Footer";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { fetchFilms, selectAllFilms } from "../../redux/films/filmSlice";
import {
  fetchSessions,
  selectAllSessions,
} from "../../redux/session/sessionSlice";

const Home = () => {
  //!Redux
  const dispatch = useDispatch();
  const allFilms = useSelector(selectAllFilms);
  const allSessions = useSelector(selectAllSessions);
  const activeLangTitles = useSelector((state) => state.lang.activeLangTitles);
  //!Hooks
  const [show, setShow] = useState(false);
  let { moviesId } = useParams();
  const parse = require("html-react-parser");
  const storage = localStorage.getItem("activeLang");
  useEffect(() => {
    dispatch(fetchFilms());
    dispatch(fetchSessions());
  }, []);
  //!Functions
  const twodFinder = (params) => {
    if (params === true) {
      return (
        <img
          className="seansIcons"
          src="https://www.zirecinema.az/img/format-icons/2d.png"
          alt=""
        />
      );
    } else {
      return (
        <img
          className="seansIcons"
          src="https://www.zirecinema.az/img/format-icons/3d.png"
          alt=""
        />
      );
    }
  };

  return (
    <div>
      <section className="homeHeaderSection">
        <header className="homeHeaderContainer">
          <div className="container">
            <Navbar />

            <Swiper

              spaceBetween={1000}
              centeredSlides={true}
              autoplay={{
                delay: 3500,
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
              {allFilms.map((movie) => {
                if (movie.mainpage === true) {
                  return (
                    <SwiperSlide key={movie.filmId}>
                      <div className="carouselComponent">
                        <div className="carouselComponentLeftSide">
                          <iframe
                            src={`https://www.youtube.com/embed/${
                              movie.trailerUrl
                            }${show === true ? "?autoplay=1" : "?autoplay=0"}`}
                            allow="accelerometer; autoplay;"
                            allowFullScreen={false}
                            title="Embedded youtube"
                            id="yt"
                          />
                          <div
                            id="content"
                            className={`carouselComponentYoutubeImage ${
                              show === true ? "showYoutube" : "hideYoutube"
                            }`}
                            style={{
                              backgroundImage: `url(https://i.ytimg.com/vi_webp/${movie.trailerUrl}/maxresdefault.webp)`,
                            }}
                          >
                            <button onClick={(e) => setShow(true)}>
                              <svg
                                height="100%"
                                version="1.1"
                                viewBox="0 0 68 48"
                                width="100%"
                              >
                                <path
                                  className="ytp-large-play-button-bg"
                                  d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                                  fill="#f00"
                                ></path>
                                <path
                                  d="M 45,24 27,14 27,34"
                                  fill="#fff"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="carouselComponentRightSide">
                          <div className="ellipsisContainer">
                            <Link to={`/movies/${movie.filmId}`}>
                              <h4>
                                {storage === "AZ"
                                  ? movie.filmNameAz
                                  : movie.filmNameRu}
                              </h4>
                            </Link>
                            <p className="ellipsis">
                              {" "}
                              {storage === "AZ"
                                ? parse(movie.descriptionAz)
                                : parse(movie.descriptionRu)}
                            </p>
                          </div>
                          <div className="carouselComponentMovieDetails">
                            <div>
                              <span>Yaş həddi</span>
                              <p>{movie.age}</p>
                            </div>
                            <div>
                              <span>Ölkə</span>
                              <p>
                                {" "}
                                {storage === "AZ"
                                  ? movie.countryNameAz
                                  : movie.countryNameRu}
                              </p>
                            </div>
                            <div>
                              <span>Dil</span>
                              <p>{movie.languageAz}</p>
                            </div>
                            <div>
                              <span>İl</span>
                              <p>{movie.year}</p>
                            </div>
                            <div>
                              <span>Janr</span>
                              <p>
                                {" "}
                                {storage === "AZ"
                                  ? movie.categoryNameAz
                                  : movie.categoryNameRu}
                              </p>
                            </div>
                            <div>
                              <span>Cədvəl</span>
                              <p>
                                {movie.datestart} - {movie.dateend}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                }
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
            className="mb-5  HomePage-cinema-tabs"
          >
            <Tab eventKey="today" title={activeLangTitles.cardTodayFilms}>
              <div className="HomeMovieCardContainer ">
                {allFilms.map((movie) => {
                  if (movie.mainpage === true && movie.today === true) {
                    return (
                      <div className="HomeMovieCard" key={movie.filmId}>
                        <div
                          className="HomeMovieCardImage"
                          style={{
                            backgroundImage: `url(https://www.zirecinema.az//uploads/images/original/${movie.image})`,
                          }}
                        ></div>
                        <div className="HomeMovieCardInfo">
                          <ul>
                            <li>
                              <label className="data">
                                {activeLangTitles.cardFilmAge}
                              </label>
                              <span className="desc">{movie.age}</span>
                            </li>

                            <li>
                              <label className="data">
                                {activeLangTitles.cardFilmLang}
                              </label>
                              <span className="desc">
                                {storage === "AZ"
                                  ? movie.categoryNameAz
                                  : movie.categoryNameRu}
                              </span>
                            </li>

                            <li>
                              <label className="data">
                                {activeLangTitles.cardFilmJanr}
                              </label>
                              <span className="desc">
                                {storage === "AZ"
                                  ? movie.categoryNameAz
                                  : movie.categoryNameRu}
                              </span>
                            </li>

                            <li>
                              <label className="data">
                                {activeLangTitles.cardFilmYear}
                              </label>
                              <span className="desc">{movie.year}</span>
                            </li>

                            <li>
                              <label className="data">
                                {activeLangTitles.cardFilmCountry}
                              </label>
                              <span className="desc">
                                {storage === "AZ"
                                  ? movie.countryNameAz
                                  : movie.countryNameRu}
                              </span>
                            </li>

                            <li>
                              <label className="data">
                                {activeLangTitles.cardFilmTable}
                              </label>
                              <span className="desc">
                                {" "}
                                {movie.datestart} - {movie.dateend}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <a href={`/movies/${movie.id}`}>
                          <h5>
                            {" "}
                            {storage === "AZ"
                              ? movie.filmNameAz
                              : movie.filmNameRu}
                            
                          </h5>
                        </a>
                      </div>
                    );
                  }
                })}
              </div>
            </Tab>
            <Tab
              eventKey="comingsoon"
              title={activeLangTitles.cardComingSoonFilms}
            >
              <div className="HomeMovieCardContainer">
                {allFilms.map((movie) => {
                  if (movie.mainpage === true && movie.soon === true) {
                    return (
                      <div className="HomeMovieCard" key={movie.filmId}>
                        <div
                          className="HomeMovieCardImage"
                          style={{
                            backgroundImage: `url(https://www.zirecinema.az//uploads/images/original/${movie.image})`,
                          }}
                        ></div>
                        <div className="HomeMovieCardInfo">
                          <ul>
                            <li>
                              <label className="data">
                                {activeLangTitles.cardFilmAge}
                              </label>
                              <span className="desc">{movie.age}</span>
                            </li>

                            <li>
                              <label className="data">
                                {activeLangTitles.cardFilmLang}
                              </label>
                              <span className="desc">{movie.age}</span>
                            </li>

                            <li>
                              <label className="data">
                                {activeLangTitles.cardFilmJanr}
                              </label>
                              <span className="desc">{movie.age}</span>
                            </li>

                            <li>
                              <label className="data">
                                {activeLangTitles.cardFilmYear}
                              </label>
                              <span className="desc">{movie.year}</span>
                            </li>

                            <li>
                              <label className="data">
                                {activeLangTitles.cardFilmCountry}
                              </label>
                              <span className="desc">
                                {movie.fk_country_id}
                              </span>
                            </li>

                            <li>
                              <label className="data">
                                {activeLangTitles.cardFilmTable}
                              </label>
                              <span className="desc">{movie.age}</span>
                            </li>
                          </ul>
                        </div>
                        <a href={`/movies/${movie.id}`}>
                          <h5>
                            {" "}
                            {storage === "AZ"
                              ? movie.filmNameAz
                              : movie.filmNameRu}
                          </h5>
                        </a>
                      </div>
                    );
                  }
                })}
              </div>
            </Tab>
          </Tabs>
        </div>
      </section>

      <section className="mt-5 mb-5 pt-5 pb-4" id="seans">
        <div className="container">
          <table>
            <thead>
              <tr>
                <th className="thfirst" scope="col">
                  {activeLangTitles.tableFims}
                </th>
                <th scope="col">{activeLangTitles.tableSessions}</th>
                <th scope="col">{activeLangTitles.tableFormat}</th>
                <th className="thlast" scope="col">
                  {activeLangTitles.tableTicketPrice}
                </th>
              </tr>
            </thead>
            <tbody>
              {allSessions.map((seans) => {
                return (
                  <tr className="table-responsive_row" key={seans.seansId}>
                    <td className="table-responsive_name">
                      <a>{seans.filmName}</a>
                    </td>

                    <td className="table-responsive_session">{seans.timeOfSeans}</td>

                    <td className="formats table-responsive_format">
                      <span>{twodFinder(seans.twod2D)}</span>
                      <span>
                        {seans.az === true ? (
                          <img
                            className="seansIcons"
                            src="https://www.zirecinema.az/img/format-icons/az.png"
                            alt=""
                            allowFullScreen=""
                          />
                        ) : seans.ru === true ? (
                          <img
                            className="seansIcons"
                            src="https://www.zirecinema.az/img/format-icons/ru.png"
                            alt=""
                          />
                        ) : seans.tr === true ? (
                          <img
                            className="seansIcons"
                            src="https://www.zirecinema.az/img/format-icons/tr.png"
                            alt=""
                          />
                        ) : seans.en === true ? (
                          <img
                            className="seansIcons"
                            src="https://www.zirecinema.az/img/format-icons/en.png"
                            alt=""
                          />
                        ) : null}
                      </span>
                      <span>
                        {seans.azSub === true ? (
                          <img
                            className="seansIcons"
                            src="https://www.zirecinema.az/img/format-icons/azsub.png"
                            alt=""
                          />
                        ) : seans.ruSub === true ? (
                          <img
                            className="seansIcons"
                            src="https://www.zirecinema.az/img/format-icons/rusub.png"
                            alt=""
                          />
                        ) : seans.trSub === true ? (
                          <img
                            className="seansIcons"
                            src="https://www.zirecinema.az/img/format-icons/trsub.png"
                            alt=""
                          />
                        ) : seans.enSub === true ? (
                          <img
                            className="seansIcons"
                            src="https://www.zirecinema.az/img/format-icons/ensub.png"
                            alt=""
                          />
                        ) : null}
                      </span>
                    </td>

                    <td className="tdlast table-responsive_price">
                      {seans.price}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
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
            <div className="homeLastSectionRight">
              <h4>{activeLangTitles.homeaboutHeader}</h4>

              <p>{activeLangTitles.homeAboutInfo}</p>

              <a href="/aboutus" className="homeLastSectionBtn">
                {activeLangTitles.homeAboutButton}
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
