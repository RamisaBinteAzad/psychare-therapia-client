import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import AddReview from '../AddReview/AddReview';

const ServiceReviewDetails = () => {
     const { _id, title, price, img, description, ratings } = useLoaderData();
      
    return (
      <div className="container">
        <div className="row   ">
          <div className=" pt-4 col-12 col-lg-8">
            <Col>
              <Card className="mb-5 h-100 shadow ">
                <PhotoProvider>
                  <PhotoView src={img}>
                    <Card.Img variant="top" className="h-100 w-100" src={img} />
                  </PhotoView>
                </PhotoProvider>

                <Card.Body className="p-4">
                  <Card.Title className="dark-blue fs-3 text-center fw-bold ">{title}</Card.Title>
                  <hr />

                  <Card.Text className="text-muted  my-2 text-justify ">
                     
                    
                    
                    {description}
                    
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
            {/* {allServices.map((service) => (
              <ServiceDetails
                key={service._id}
                service={service}
              ></ServiceDetails>
            ))} */}
          </div>
          <div className=" col-12 col-lg-4   activities-container   ">
            <AddReview key={_id} id={_id} title={title} ratings={ratings}></AddReview>
          </div>
        </div>
      </div>
    );
};

export default ServiceReviewDetails;