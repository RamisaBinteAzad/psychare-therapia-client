import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { FaQuoteLeft, FaQuoteRight, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import './Review.css'

const Review = ({ review }) => {
    const {
      comment,
      customer,
      displayName,
      email,
      profilepic,
      reviewName,
      service,
      _id,
      rating,
    } = review;
    // console.log(review);
    

  return (
    <Col className="  ">
      <Card className="h-100">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <Image
              roundedCircle
              className="me-2"
              src={profilepic}
              style={{ height: "40px" }}
            ></Image>
            <div>
              <p className="mb-0 blog-title-color fw-bold">{displayName}</p>
              <p> October 17, 2022</p>
            </div>
          </div>
          <div className="me-2 text-warning">
            <FaStar className=" "></FaStar>
            <FaStar className=" "></FaStar>
            <FaStar className=""></FaStar>
            <FaStar className=""></FaStar>
            <FaStarHalfAlt></FaStarHalfAlt>
            <span className=" faFacebook fw-bold">{rating}</span>
          </div>
        </Card.Header>
        <Card.Body className="p-4">
          <FaQuoteLeft></FaQuoteLeft>
          <Card.Text className="dark-blue fw-bold">{comment}</Card.Text>
          <div className="d-flex justify-content-end">
            <FaQuoteRight></FaQuoteRight>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Review;