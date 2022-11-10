import React from 'react';
import { Container } from 'react-bootstrap';
import { FaHandHoldingHeart, FaSearch, FaSeedling, FaWallet } from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './PsychotherapyTime.css'
 
import { FaPaperPlane,FaPlane,FaRocket,FaUser,FaCalendarPlus,FaDownload,FaUserTag,FaBolt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { faGear, faHandHoldingHeart, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

const PsychotherapyTime = () => {
    return (
      <div className=" h-100">
        <Container >
          <hr className="shadow" />
          <div className="text-center">
            <h3 className="fs-3 dark-blue fw-bold mt-5 ">
              WHEN SHOULD YOU TAKE PYCHOLOGICAL
              <br />
              <span className="pink mb-4">THERAPY AND COUNSELING?</span>
            </h3>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4 text-center mt-3  ">
              <FaSearch className="icon-pink fs-2 pe-2"></FaSearch>

              <p className="dark-blue fs-5   fw-bold">
                Seeking clarity in some areas of your life
              </p>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 text-center mt-3  ">
              <FontAwesomeIcon
                className="icon-pink fs-2 pe-2"
                icon={faGear}
              ></FontAwesomeIcon>
              <p className="dark-blue fs-5   fw-bold">
                Wanting to work through complex emotions
              </p>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 text-center mt-3  ">
              <FontAwesomeIcon
                className="icon-pink fs-2 pe-2"
                icon={faLayerGroup}
              ></FontAwesomeIcon>

              <p className="dark-blue fs-5   fw-bold">
                Experienced a traumatic incident or crisis
              </p>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 text-center mt-3  ">
              <FaSeedling className="icon-pink fs-2 pe-2"></FaSeedling>

              <p className="dark-blue fs-5   fw-bold">
                Wanting to focus on personal growth
              </p>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 text-center mt-3  ">
              <FontAwesomeIcon
                className="icon-pink fs-2 pe-2"
                icon={faHandHoldingHeart}
              ></FontAwesomeIcon>

              <p className="dark-blue fs-5   fw-bold">
                Wanting to learn new coping techniques
              </p>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 text-center mt-3  ">
              <FaWallet className="icon-pink fs-2 pe-2"></FaWallet>

              <p className="dark-blue fs-5   fw-bold">
                Need help processing any change or loss.
              </p>
            </div>

          
          </div>
        </Container>
      </div>
    );
};

export default PsychotherapyTime;