import { faArrowRight, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/images/Couple.jpg";
import img2 from "../../../assets/images/Depression.jpg";
import img3 from "../../../assets/images/Family.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide height-change w-100   "
      data-bs-ride="carousel"
    >
      <div className="carousel-inner    ">
        <div className="carousel-item active    ">
          <div className="card   text-bg-dark border-0 h-100 w-100  ">
            <img
              src={img1}
              className="card-img img-fluid opacity  w-100 h-100"
              alt=""
            />
            <div className="card-img-overlay container align-items-center     d-none d-md-flex ">
              <div className="header">
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
            <div className="card-img-overlay d-flex  container  py-4 px-5  d-md-none d-flex py-auto mx-auto ">
              <div className="header ">
                <h3 className="   ">Better Advice for</h3>

                <h4 className="">
                  <i>Healthy And Happier </i>
                </h4>
                <h3 className="">Relationships</h3>

                <span>
                  <small className="text-gray ">
                    Mental Health is a majorn concern nowadays,which
                    <br />
                    can end up affecting relations & giving diseases.
                  </small>
                </span>
                <div className="mt-2">
                  <Link to="/">
                    <button
                      type="button"
                      className=" rounded   btn btn-sm border-0 text-white btn-bg-pink   me-3  px-3 "
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
                      className=" rounded  btn btn-sm bg-light  text-primary border-0   px-3 "
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
            <div className="card-img-overlay d-none d-md-flex container align-items-center  ">
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
                  <Link to="/signup">
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
            <div className="card-img-overlay d-flex  container      py-4 px-5   d-md-none d-flex py-auto mx-auto ">
              <div className="header ">
                <h3 className="   ">Transform your</h3>

                <h2 className="">
                  <i>Mindset & Achieve </i>
                </h2>
                <h3 className="">your Goals.</h3>

                <span>
                  <small className="text-gray   ">
                    Amazing therapies and advice to help you achieve your
                    <br />
                    goals and taking important decisions of your life.
                  </small>
                </span>
                <div className="mt-2">
                  <Link to="/">
                    <button
                      type="button"
                      className=" rounded   btn btn-sm border-0 text-white btn-bg-pink   me-3  px-3 "
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
                      className=" rounded  btn btn-sm bg-light  text-primary border-0   px-3 "
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

            <div className="card-img-overlay   container   align-items-center  d-none d-md-flex   ">
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
            <div className="card-img-overlay   container     py-4 px-5   d-md-none d-flex py-auto mx-auto ">
              <div className="header ">
                <h3 className="   ">Help family members</h3>

                <h4 className="">
                  <i>improve communication</i>
                </h4>
                <h3 className=""> and resolve conflicts.</h3>

                <span>
                  <small className="text-gray   ">
                    Learn new ways to to deepen family connections and
                    <br />
                    overcome unhealthy patterns of relating to each other.
                  </small>
                </span>
                <div className="mt-2">
                  <Link to="/">
                    <button
                      type="button"
                      className=" rounded   btn btn-sm border-0 text-white btn-bg-pink   me-3  px-3 "
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
                      className=" rounded  btn btn-sm bg-light  text-primary border-0   px-3 "
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
