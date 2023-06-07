import React, { useEffect } from "react";
import { HiPhone } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../images/zirecinemalogo.png";
import { addActiveLang, addActiveLangTitle } from "../../redux/lang/langSlice";
import { useDispatch, useSelector } from "react-redux";
const Navigationbar = () => {
  const dispatch = useDispatch();
  const activeLangTitles = useSelector((state) => state.lang.activeLangTitles);

  const langs = [
    {
      id: 1,
      name: "AZ",
    },
    {
      id: 2,
      name: "RU",
    },
  ];
  useEffect(() => {
    if (localStorage.getItem("activeLang") === null) {
      localStorage.setItem("activeLang", "AZ");
    } else if (localStorage.getItem("activeLang") === "AZ") {
      dispatch(addActiveLangTitle(localStorage.getItem("activeLang")));
    } else if (localStorage.getItem("activeLang") === "RU") {
      dispatch(addActiveLangTitle(localStorage.getItem("activeLang")));
    }
    dispatch(addActiveLang(localStorage.getItem("activeLang")));
  }, []);

  const handleInputChange = (e) => {
    localStorage.setItem("activeLang", e.target.value);
    dispatch(addActiveLangTitle(localStorage.getItem("activeLang")));
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        color="dark"
        bg="transparent"
        className="navigationBar"
      >
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="" srcSet="" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="navbar-toggler-icon"
          >
            <RxHamburgerMenu className="hamburger-icon" size={30} color="#fff"/>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end flex-grow-1 pe-3 navlinks">
              <Nav.Link href="/#films">{activeLangTitles.navbarFilm}</Nav.Link>
              <Nav.Link href="/#seans">{activeLangTitles.navbarTable}</Nav.Link>
              <Nav.Link href="/#cinema">
                {activeLangTitles.navbarCinema}
              </Nav.Link>
              <a className="nav-link call" href="tel:+994704048869">
                <HiPhone />
                {activeLangTitles.navbarPhoneNumber}
              </a>

              <select
                className="lang"
                name="lang"
                id="lang"
                onChange={(e) => handleInputChange(e)}
                value={localStorage.getItem("activeLang")}
              >
                {langs.map((lang) => (
                  <option key={lang.id} value={lang.name}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigationbar;
