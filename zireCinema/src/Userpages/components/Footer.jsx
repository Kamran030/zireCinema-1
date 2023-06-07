import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { activeLangTitles, activeLang } from "../../redux/lang/langSlice";
import { useDispatch, useSelector } from "react-redux";

const Footer = () => {
  const dispatch = useDispatch();
  const activeLang = useSelector((state) => state.activeLang);
  const activeLangTitles = useSelector((state) => state.lang.activeLangTitles);
  const parse = require("html-react-parser");
  return (
    <div>
      <footer className="footerContainer">
        <div className="container ">
          <div className="row">
            <div className="col-md-4 center">
              <span>{activeLangTitles.footerAdressHeader}</span>
              <h6>{parse(activeLangTitles.footerAdress)}</h6>
            </div>

            <div className="col-md-4 center">
              <span>{activeLangTitles.footerSocial}</span>
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
              <span>{activeLangTitles.footerPhone}</span>
              <h6>{activeLangTitles.footerPhoneNum1}</h6>
              <h6>{activeLangTitles.footerPhoneNum2}</h6>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-end col-md-12 text-center">
        <p>{activeLangTitles.footerEnd}</p>
      </div>
    </div>
  );
};

export default Footer;
