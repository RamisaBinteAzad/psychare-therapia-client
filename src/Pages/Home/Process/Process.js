import React from "react";
import img from "../../../assets/images/counseling-psychology-session.jpg";
import img1 from "../../../assets/images/cognitive-behavioral-therapy.webp";
import img2 from "../../../assets/images/what-to-expect-from-couples-therapy-bondi-1024x682 - Copy.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FaSmile, FaUserCheck,FaHandHoldingHeart } from "react-icons/fa";

const Process = () => {
  return (
    <div className="container mt-5 mb-5 py-3-2">
      <hr />
      {/* <div className="text-center">
          <span className="display-4 mt-5 fw-bold pink me-3">My</span>
          <span className=" display-4 dark-blue  ">Services</span>
          <p className="fs-6 mb-5 fw-bold text-muted mt-2">
            Complete Set Of Services Provided To Make <br />A Positive Change In
            Your Life.
          </p>
        </div> */}

      <div className="row d-flex  ">
        <div className="col-md-7  ">
          <img src={img} className="img-fluid h-100" alt="" />
        </div>
        <div className="col-md-5 ">
          <div className=" h-50">
            <h3 className="fs-2 dark-blue fw-bold mt-3 ">
              Every Journey Starts With The First Step, So You Just Made Yours.
            </h3>
            <p className="my-3 p-lg-0 text-muted fw-bold   ">
              Psychological therapy can be a beneficial and rewarding process.
              It allows you to process hardship in your life, develop coping
              skills as well as navigate issues which are affecting your life.
              The processes by which you can get Psychological Care:
              <br />
              <div className="mt-2">
                <div className="">
                  <p className="pink fw-bold">
                    <FaSmile className="faFacebook me-3"></FaSmile>
                    Talk To me first
                    <br />
                  </p>
                  <p className="dark-navy px-4">
                    Firstly Talk with me openly via Face to Face Or Online
                  </p>
                </div>
                <div className="">
                  <p className="pink fw-bold">
                    <FaUserCheck className="faFacebook me-3"></FaUserCheck>
                    Book Your Session
                    <br />
                  </p>
                  <p className="dark-navy px-4">
                    Fill out forms about your current and past physical and
                    emotional health and booked your sessions.
                  </p>
                </div>
                <div className="">
                  <p className="pink fw-bold">
                    <FaHandHoldingHeart className="faFacebook me-3"></FaHandHoldingHeart>
                    COME SIT WITH ME
                    <br />
                  </p>
                  <p className="dark-navy px-4">
                    Come and sit eith me.Talk about your thoughts and feelings
                    and what's troubling you openly.
                  </p>
                </div>
              </div>
            </p>
            {/* <div className=" p-3 p-lg-0">
                <button
                  type="button"
                  className=" rounded border-0 btn-bg   px-3 py-2"
                >
                  Sign Up
                  <FontAwesomeIcon
                    className="ms-2"
                    icon={faArrowRight}
                  ></FontAwesomeIcon>
                </button>
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
