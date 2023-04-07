import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footerContainer">
        <div className="container ">
          <div className="row">
            <div className="col-md-4 center">
              <span>ÜNVAN</span>
              <h6>
                Xəzər r-nu, Zirə q.
                <br />
                Seyid əzim şirvani 40
              </h6>
            </div>

            <div className="col-md-4 center">
              <span>SOSİAL ŞƏBƏKƏLƏR</span>
              <h6>
                <a href="#">
                  <FaFacebookF />
                </a>
                <a target="blank" href="https://www.instagram.com/zirecinema/">
                  <FaInstagram />
                </a>
              </h6>
            </div>

            <div className="col-md-4 center">
              <span>TELEFON</span>
              <h6>+994 12 404 88 69</h6>
              <h6>+994 70 404 88 69</h6>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-end col-md-12 text-center">
        <p>Bütün hüquqlar qorunur. © ZireCinema 2019</p>
      </div>
    </div>
  );
};

export default Footer;
