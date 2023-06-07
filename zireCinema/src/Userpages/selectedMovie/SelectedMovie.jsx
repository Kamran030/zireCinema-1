import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { RU, AZ } from "country-flag-icons/react/3x2";
import Navigation from "../components/Navigationbar";
import YoutubeModal from "../components/YoutubeModal";

const SelectedMovie = () => {
  let { moviesId } = useParams();
  console.log(moviesId, "moviesId");
  const [movie, setMovie] = useState({});
  const [movies, setMovies] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((response) => response.json())
      .then((movies) => setMovies(movies))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${moviesId}`)
      .then((response) => response.json())
      .then((movie) => setMovie(movie))
      .catch((error) => console.log(error));
  }, [moviesId]);

  return (
    <div className="selectedMovieContainer">
      <div className="navHeaderContainer">
        <Navigation />
      </div>
      <div className="container">
        <div className="selectedMovieMainContainer ">
          <div className="selectedMovieMainLeft">
            <div>
              <img src={movie.poster} alt="" />
            </div>
          </div>
          <div className="selectedMovieMainRight">
            <div className="selectedMovieRightSideTop">
              <h1>
                {movie.Title} <span>{movie.Year}</span>
              </h1>
            </div>
            <div className="selectedMovieRightSideTabs">
              <Tabs
                defaultActiveKey="description"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="description" title="Təsvir">
                  <div className="selectedMovieDescriptionTab">
                    <div className="selectedMovieDescriptionTabMain">
                      <div>
                        <span>Ölkə</span>
                        <p> {movie.Title}</p>
                      </div>
                      <div>
                        <span>Dil</span>
                        <p> {movie.Title}</p>
                      </div>
                      <div>
                        <span>İl</span>
                        <p> {movie.Title}</p>
                      </div>
                      <div>
                        <span>Janr</span>
                        <p> {movie.Title}</p>
                      </div>
                      <div>
                        <span>Müddət</span>
                        <p> {movie.Title}</p>
                      </div>
                      <div>
                        <span>Rejissor</span>
                        <p> {movie.Title}</p>
                      </div>
                      <div>
                        <span>Rollarda</span>
                        <p>{movie.Title}</p>
                      </div>
                      <div>
                        <span>Cədvəl</span>
                        <p> {movie.Title}</p>
                      </div>
                    </div>
                    <div>
                      <Link
                        className="selectedMovieDescriptionTabBtn"
                        to=""
                        onClick={() => setModalShow(true)}
                      >
                        Treyler
                      </Link>
                      <YoutubeModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="table" title="Cədvəl">
                  <section className=" selectedMovieTableTab" id="seans">
                    <div className="container">
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr className="py-4">
                              <th className="thfirst " scope="col">
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
                            <tr className="py-4">
                              <td className="py-4">
                                <a>Şazam! 2</a>
                              </td>

                              <td className="py-4">10:00:00</td>

                              <td className="formats py-4">
                                <span>
                                  <OverlayTrigger
                                    key={"top"}
                                    placement={"top"}
                                    overlay={
                                      <Tooltip id={`tooltip-top`}>
                                        Film {} formatda nümayiş olunur
                                      </Tooltip>
                                    }
                                  >
                                    <Button variant="secondary"></Button>
                                  </OverlayTrigger>
                                </span>

                                <span>
                                  <OverlayTrigger
                                    key={"top"}
                                    placement={"top"}
                                    overlay={
                                      <Tooltip id={`tooltip-top`}>
                                        Film {} dilində nümayiş olunub.
                                      </Tooltip>
                                    }
                                  >
                                    <Button variant="secondary">
                                      <RU />
                                    </Button>
                                  </OverlayTrigger>
                                </span>
                                <span>
                                  <OverlayTrigger
                                    key={"top"}
                                    placement={"top"}
                                    overlay={
                                      <Tooltip id={`tooltip-top`}>
                                        {} dilində altyazı ilə"
                                      </Tooltip>
                                    }
                                  >
                                    <Button variant="secondary">
                                      <AZ />
                                    </Button>
                                  </OverlayTrigger>
                                </span>
                              </td>

                              <td className="tdlast py-4">3 AZN</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
        <div className="selectedMovieMainBottom">
          <p>{movie.Plot}</p>
          <h1>{movie.Released}</h1>
        </div>
        <section className="mb-5 mt-5 pb-5" id="films">
          <div className="container">
            <h5 className="selectedFilmsOtherFilms">DİGƏR FİLMLƏR</h5>
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
                          <label className="data">Yaş</label>
                          <span className="desc">18+</span>
                        </li>

                        <li>
                          <label className="data">Dil</label>
                          <span className="desc">Rus</span>
                        </li>

                        <li>
                          <label className="data">Janr</label>
                          <span className="desc">Triller</span>
                        </li>

                        <li>
                          <label className="data">İl</label>
                          <span className="desc">2023</span>
                        </li>

                        <li>
                          <label className="data">Ölkə</label>
                          <span className="desc">ABŞ</span>
                        </li>

                        <li>
                          <label className="data">Cədvəl</label>
                          <span className="desc">23.03.23 - 12.04.23</span>
                        </li>
                      </ul>
                    </div>
                    <Link to={`/movies/${movie.id}`}>
                      <h5>{movie.Title}</h5>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SelectedMovie;
