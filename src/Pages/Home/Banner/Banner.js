import { faArrowRight, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/images/Couple.jpg";
import img2 from "../../../assets/images/Depression.jpg";
import img3 from "../../../assets/images/Family.jpg";
import './Banner.css'

const Banner = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner   ">
        <div className="carousel-item active  ">
          <div className="card   text-bg-dark border-0 ">
            <img
              src={img1}
              className="card-img img-fluid opacity  w-100 h-100"
              alt=""
            />
            <div className="card-img-overlay d-flex  container align-items-center  ">
              <div className=" ">
                <h1 className="display-4   text-light">Better Advice for</h1>

                <h3 className="display-5   text-light">
                  <i>Healthy And Happier </i>
                </h3>
                <h1 className="display-4   text-light">Relationships</h1>

                <p className="text-gray">
                  Mental Health is a majorn concern nowadays,which can
                  <br /> end up affecting relations & giving diseases.
                </p>
                <div className="mt-5">
                  <Link to="/">
                    <button
                      type="button"
                      className=" rounded   border-0  btn-bg-pink   me-3  px-3 py-2"
                    >
                      Get Started
                      <FontAwesomeIcon
                        className="ms-2"
                        icon={faArrowRight}
                      ></FontAwesomeIcon>
                    </button>
                  </Link>
                  <Link to="/">
                    <button
                      //   type="button"
                      className=" rounded  btn-bg-white border-0   px-3 py-2"
                    >
                      Book Session
                      <FontAwesomeIcon
                        className="ms-2"
                        icon={faSignInAlt}
                      ></FontAwesomeIcon>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card text-bg-dark border-0  ">
            <img
              src={img2}
              className="card-img img-fluid opacity-25  w-100 h-100"
              alt=""
            />
            <div className="card-img-overlay d-flex container align-items-center  ">
              <div className="">
                <h1 className="display-4   text-light">Transform your</h1>

                <h3 className="display-5   text-light">
                  <i>Mindset & Achieve</i>
                </h3>
                <h1 className="display-4   text-light">your Goals.</h1>
                <p className="text-gray">
                  Amazing therapies and advice to help you achieve your <br />
                  goals and taking important decisions of your life.
                </p>
                <div className="mt-5">
                  <Link to="/">
                    <button
                      type="button"
                      className=" rounded   border-0  btn-bg-pink   me-3  px-3 py-2"
                    >
                      Get Started
                      <FontAwesomeIcon
                        className="ms-2"
                        icon={faArrowRight}
                      ></FontAwesomeIcon>
                    </button>
                  </Link>
                  <Link to="/">
                    <button
                      //   type="button"
                      className=" rounded  btn-bg-white border-0   px-3 py-2"
                    >
                      Book Session
                      <FontAwesomeIcon
                        className="ms-2"
                        icon={faSignInAlt}
                      ></FontAwesomeIcon>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card text-bg-dark border-0   ">
            <img
              src={img3}
              className="card-img img-fluid opacity-25 w-100 h-100"
              alt=""
            />

            <div className="card-img-overlay d-flex container align-items-center   ">
              <div className="">
                <h1 className="display-4   text-light">Help family members</h1>
                <h3 className="display-5   text-light">
                  <i>improve communication</i>
                </h3>
                <h1 className="display-4   text-light">
                  and resolve conflicts.
                </h1>
                <p className="text-gray">
                  Learn new ways to to deepen family connections and
                  <br />
                  overcome unhealthy patterns of relating to each other.
                </p>
                <div className="mt-5">
                  <Link to="/">
                    <button
                      type="button"
                      className=" rounded   border-0  btn-bg-pink   me-3  px-3 py-2"
                    >
                      Get Started
                      <FontAwesomeIcon
                        className="ms-2"
                        icon={faArrowRight}
                      ></FontAwesomeIcon>
                    </button>
                  </Link>
                  <Link to="/">
                    <button
                      //   type="button"
                      className=" rounded  btn-bg-white border-0   px-3 py-2"
                    >
                      Book Session
                      <FontAwesomeIcon
                        className="ms-2"
                        icon={faSignInAlt}
                      ></FontAwesomeIcon>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;
