 import { faComment, faEnvelope, faLock, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { FloatingLabel, Form, Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
 
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import AllReviews from '../AllReviews/AllReviews';
 
const AddReview = ({ id, title }) => {
    const { user} = useContext(AuthContext);
    // console.log(user.displayName);
      const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
          const email = user?.email || "unregistered";
          const photoURL =user?.photoURL|| "null"
          const displayName = user?.displayName; ;
        const rating = form.rating.value;
          const comment = form.comment.value;
          console.log(displayName, email, user.photoURL, rating, comment);
          const review = {
            service: id,
            reviewName: title,
            profilepic: photoURL,
            customer: displayName,
            email,
            displayName,
            comment,
            rating,
          };
    // if(phone.length > 10){
    //     alert('Phone number should be 10 characters or longer')
    // }
    // else{

    // }
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
      body: JSON.stringify(review ),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Your Valuable Review submitted successfully");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

      
    return (
      <div>
        <Container>
           
            <AllReviews key={id} id={id}></AllReviews>
          
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <FontAwesomeIcon
                className="me-2 faFacebook"
                icon={faStar}
              ></FontAwesomeIcon>
              <Form.Label className="pink mt-2 fw-bold">Rating</Form.Label>

              <Form.Control
                className="rounded-pill px-4 py-2"
                name="rating"
                type="text"
                placeholder="Rating"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <FontAwesomeIcon
                className="me-2   faFacebook"
                icon={faComment}
              ></FontAwesomeIcon>
              <Form.Label className="pink fw-bold">Your Review</Form.Label>
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  name="comment"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
            </Form.Group>
            <div className="text-center mb-4">
              <button
                className="btn btn-bg-navy text-white  border-0  rounded w-50 p-2"
                type="submit"
              >
                Submit
              </button>
            </div>

            {/* <Form.Text className="text-danger">{error}</Form.Text> */}
          </Form>
        </Container>
      </div>
    );
};
 
 export default AddReview;
