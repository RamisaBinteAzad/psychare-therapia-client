import React from "react";
import { Button, Card, Col, Image } from "react-bootstrap";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { price, img, title, description, ratings } = service;
    return (
      <div>
        <Col>
          <Card className="mb-5 h-100 shadow ">
            <Card.Img variant="top" className="h-100 w-100" src={img} />
            <Card.Body className="p-4">
              <Card.Title className="dark-blue fs-3 ">{title}</Card.Title>

              <Card.Text className="text-muted  my-2 text-justify ">
                {description.length > 100 ? (
                  <>
                    {description.slice(0, 100) + "..."} <br />
                    <Button variant="rounded  mt-2 btn   border-0 text-white btn-bg-pink    px-3 ">
                      <Link
                        //   to={`/singleCourse/${id}`}
                        className="text-decoration-none text-white"
                      >
                        View Details
                      </Link>
                    </Button>
                  </>
                ) : (
                  description
                )}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className="d-flex justify-content-between">
                <div className="faFacebook   d-flex align-items-center mt-1">
                  <FaStar className=" "></FaStar>
                  <FaStar className=" "></FaStar>
                  <FaStar className=""></FaStar>
                  <FaStar className=""></FaStar>
                  <FaStarHalfAlt></FaStarHalfAlt>
                  <span className="ms-2 faFacebook fw-bold">{ratings}</span>
                </div>
                <div>
                  <span className="  h1 pink">${price}</span>
                </div>
              </div>
              {/* <div>
              <FaEye className="me-2"></FaEye>
              <span>{total_view}</span>
            </div> */}
            </Card.Footer>
          </Card>
            </Col>
            
      </div>
    );
};

export default ServiceCard;
