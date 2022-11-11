import React, { useEffect, useState } from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { FaEdit, FaStar, FaStarHalfAlt, FaTrash } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const MyReviewsRow = ({ myReview, handleDelete }) => {
    
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
  } = myReview;

  const [reviewService, setreviewService] = useState({});

  //  fetch(`http://localhost:5000/services/${service}`)
  //      .then((res) => res.json())
  //      .then((data) => setOrderService(data));
  //  }, [service]);
  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => setreviewService(data));
  }, [service]);
  return (
    <div>
      <div>
        
          <Col>
            <Card className=" shadow ">
              <Card.Header className="d-flex justify-content-between align-items-center">
                <div className="d-flex">
                  <Image
                    roundedCircle
                    className="me-2"
                    src={profilepic}
                    style={{ height: "40px" }}
                  ></Image>
                  <div>
                    <p className="mb-0 blog-title-color fw-bold">{customer}</p>
                    <p> October 17, 2022</p>
                  </div>
                </div>

                <button
                  onClick={() => handleDelete(_id)}
                  className="btn btn-light"
                >
                  <FaTrash className="faFacebook"></FaTrash>
                </button>

                <FaEdit className="faFacebook"></FaEdit>
              </Card.Header>
              <PhotoProvider>
                <PhotoView src={reviewService.img}>
                  <Card.Img
                    variant="top"
                    className="img-fluid h-100"
                    src={reviewService.img}
                  />
                </PhotoView>
              </PhotoProvider>

              <Card.Body className="px-4">
                <Card.Title className="dark-blue fs-4 fw-bold py-3  ">
                  {reviewName}
                  <hr />
                </Card.Title>

                <Card.Text className="text-muted pb-2 ">{comment}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <div className="d-flex justify-content-between">
                  <div className="faFacebook   d-flex align-items-center mt-1">
                    <FaStar className=" "></FaStar>
                    <FaStar className=" "></FaStar>
                    <FaStar className=""></FaStar>
                    <FaStar className=""></FaStar>
                    <FaStarHalfAlt></FaStarHalfAlt>
                    <span className="ms-2 faFacebook fw-bold">{rating}</span>
                  </div>
                  <div>
                    <span className="  h1 pink">${reviewService.price}</span>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </Col>
       
      </div>
    </div>
  );
};

export default MyReviewsRow;