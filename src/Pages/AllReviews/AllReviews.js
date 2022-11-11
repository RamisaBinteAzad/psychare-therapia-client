import React, { useContext, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import Review from "../Review/Review";

const AllReviews = ({ id }) => {
  const { user } = useContext(AuthContext);
  // user er upore base kore data ta load korte hobe

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://psychare-therapia-server.vercel.app/reviews?service=${id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [id]);
  return (
    <div>
      {/* // <Review key={review._id} review={review}></Review>   */}
      <Container>
        <Row xs={1} md={1} lg={1} className="g-4 mb-5">
          {reviews.map((review) => (
            <Review key={id} review={review}></Review>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllReviews;
