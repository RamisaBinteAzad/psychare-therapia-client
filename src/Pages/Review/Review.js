import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

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
    

  return (
    <Col className="  ">
      <Card className="h-100">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <Image
              roundedCircle
              className="me-2"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              style={{ height: "40px" }}
            ></Image>
            <div>
              <p className="mb-0 blog-title-color fw-bold">Colt Steele</p>
              <p> October 17, 2022</p>
            </div>
          </div>
          <div>
            <FaStar className=" "></FaStar>
            <FaStar className=" "></FaStar>
            <FaStar className=""></FaStar>
            <FaStar className=""></FaStar>
            <FaStarHalfAlt></FaStarHalfAlt>
          </div>
        </Card.Header>
        <Card.Body className="p-4">
          <Card.Img
            variant="top"
            src="https://www.kadamtech.com/wp-content/uploads/2019/01/sql-vs-no-sql-1.png"
            className="img-fluid"
          />
          <Card.Title className="dark-blue fw-bold mt-3">
            What Are The Differences between SQL and NoSQL?
            <hr />
          </Card.Title>
          <Card.Text className="text-muted">
            The Difference between SQL and NoSQL is:
            <ul>
              <li>
                {" "}
                SQL is RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).Wheras
                NoSQL is Non-relational or distributed database system.
              </li>
              <li>
                {" "}
                SQL databases have fixed or static or predefined schema but
                NoSQL databases have dynamic schema
              </li>
              <li>
                {" "}
                SQL databases are best suited for complex queries but NoSQL
                databases databases are not so good for complex queries
              </li>
            </ul>{" "}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Review;