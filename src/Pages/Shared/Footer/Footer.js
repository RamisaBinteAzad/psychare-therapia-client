import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaTwitter, FaInstagram, FaLinkedin, FaGithub,FaHome,FaEnvelope,FaPhoneAlt,FaClock,FaPhoneSquareAlt} from "react-icons/fa";
import logo from "../../../assets/icons/psychology.png";
import './Footer.css'

const Footer = () => {
  return (
    <div className="bg-light shadow-lg">
      <footer className=" text-lg-start  text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4  ">
          {/* <div className="me-5 d-none d-lg-block  text-white me-auto">
            <span className="text-center">
              Get connected with us on social networks:
            </span>
          </div> */}
        </section>

        <section className="">
          <div className="container   text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase text-white fw-bold mb-4">
                  <div className="d-flex align-items-center  ">
                    <img
                      src={logo}
                      alt="Logo"
                      className="me-2  img-fluid  d-inline-block "
                    />
                    <div className=" fw-bold     align-items-center    ">
                      <span className="fs-3  mt-2 fw-bold pink">Psychare</span>
                      <p className=" fs-4 dark-blue my-0">Therapia</p>
                    </div>
                  </div>
                </h6>
                <p className="text-dark fw-bold">
                  Being a full-time psychologist, I make my patients feel
                  special so they can discuss their problems openly. My goal is
                  to help people fighting their fears and life issues.
                </p>
                <div className="d-none d-lg-block ">
                  <Link
                    to=""
                    className="
                     me-4 text-reset"
                  >
                    <FaFacebook className="faFacebook"></FaFacebook>
                  </Link>
                  <Link to="" className="me-4 text-reset">
                    <FaTwitter className="fa-twitter"></FaTwitter>
                  </Link>
                  <Link to="" className="me-4 text-reset">
                    <FaGoogle className="fa-google"></FaGoogle>
                  </Link>
                  <Link to="" className="me-4 text-reset">
                    <FaInstagram className="fa-instragram"></FaInstagram>
                  </Link>

                  <Link to="" className="me-4 text-reset">
                    <FaLinkedin className="fa-Linkedin"></FaLinkedin>
                  </Link>
                  <Link to="" className="me-4 text-reset">
                    <FaGithub className="fa-Github"></FaGithub>
                  </Link>
                </div>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 dark-blue">
                  Services
                  <hr />
                </h6>
                <p>
                  <Link to="#!" className="text-dark  fw-bold">
                    Individual Counseling
                  </Link>
                </p>
                <p>
                  <Link to="#!" className="text-dark  fw-bold">
                    Marriage Counseling
                  </Link>
                </p>
                <p>
                  <Link to="#!" className="text-dark  fw-bold">
                    Family Therapy
                  </Link>
                </p>
                <p>
                  <Link to="#!" className="text-dark  fw-bold">
                    Child & Teen Therapy
                  </Link>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase  fw-bold mb-4 dark-blue">
                  Contact Details
                  <hr />
                </h6>
                <p className="text-dark fw-bold">
                  <FaHome className="faFacebook me-3"></FaHome>
                  Hotel Suite Palace, House# 31, Road# 13, Block# K Baridhara,
                  Dhaka 1212
                </p>
                <p className="text-dark fw-bold">
                  <FaEnvelope className="faFacebook me-3"></FaEnvelope>
                  info@example.com
                </p>
                <p className="text-dark fw-bold">
                  <FaPhoneAlt className="faFacebook me-3"></FaPhoneAlt>
                  +01777-772763
                </p>

                <p className="text-dark fw-bold">
                  <FaClock className="faFacebook me-3"></FaClock>
                  Mon - Fri: ( 9am - 6pm ) Sat & Sun: CLOSED
                </p>
                <div className="d-lg-none mb-3 ">
                  <Link
                    to=""
                    className="
                     me-4 text-reset"
                  >
                    <FaFacebook className="faFacebook"></FaFacebook>
                  </Link>
                  <Link to="" className="me-4 text-reset">
                    <FaTwitter className="fa-twitter"></FaTwitter>
                  </Link>
                  <Link to="" className="me-4 text-reset">
                    <FaGoogle className="fa-google"></FaGoogle>
                  </Link>
                  <Link to="" className="me-4 text-reset">
                    <FaInstagram className="fa-instragram"></FaInstagram>
                  </Link>

                  <Link to="" className="me-4 text-reset">
                    <FaLinkedin className="fa-Linkedin"></FaLinkedin>
                  </Link>
                  <Link to="" className="me-4 text-reset">
                    <FaGithub className="fa-Github"></FaGithub>
                  </Link>
                </div>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2   mb-4">
                <h6 className="text-uppercase fw-bold mb-4 dark-blue">
                  Book Appointment
                  <hr />
                </h6>
                <div className="border grayish-bg-pink w-lg-100  py-3 px-2 mb-2 rounded shadow">
                  <p className="text-uppercase faFacebook fw-bold">
                    Let's Chat{" "}
                  </p>

                  <FaPhoneSquareAlt className="  faFacebook"></FaPhoneSquareAlt>
                  <small className="text-muted fw-bold   ">+01777-772763</small>
                </div>
                <small className="  fw-bold text-dark  ">
                  Contact us now for
                  <br />
                  a quote about consultation <br />
                  <span className="faFacebook">( Available 24/7 )</span>
                </small>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4 grayish-pink shadow-lg">
          <span className="text-dark fw-bold"> © 2021 Copyright:</span>
          <Link className="text-reset  dark-blue fw-bold" to="/">
            <span className="me-2  mt-2 fw-bold pink">Psychare</span>
            <span className="  dark-blue my-0">Therapia</span>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
