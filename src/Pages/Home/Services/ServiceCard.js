import React from "react";
import { Button, Card, Col, Image } from "react-bootstrap";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
 
const ServiceCard = ({ service }) => {
  const { price, img, title, description, ratings,_id } = service;
    return (
      <div>
        <Col>
          <Card className=" shadow ">
            <PhotoProvider>
              <PhotoView src={img}>
                <Card.Img variant="top" className="img-fluid h-100" src={img} />
              </PhotoView>
            </PhotoProvider>

            <Card.Body className="px-4">
              <Card.Title className="dark-blue fs-4 fw-bold py-3  ">
                {title}
                <hr />
              </Card.Title>

              <Card.Text className="text-muted pb-2 ">
                {description.length > 100 ? (
                  <>
                    {description.slice(0, 100) + "..."} <br />
                    <Button variant="rounded  my-2 btn mt-3  border-0 text-white btn-bg-pink    px-3 ">
                      <Link
                        to={`/services/${_id}`}
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
            </Card.Footer>
          </Card>
        </Col>
      </div>
    );
};

export default ServiceCard;
