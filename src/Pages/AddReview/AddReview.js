 import { faComment, faEnvelope, faLock, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { FloatingLabel, Form, Row, Spinner } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
 
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import AllReviews from '../AllReviews/AllReviews';
 
const AddReview = ({id, title }) => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const location = useLocation();
  console.log("AddReview",location);
     <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  //  const navigate = useNavigate(); 
  // console.log(location);
    
   
   if (loading) {
     return <Spinner animation="grow" variant="danger" />;
   }
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
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          alert("Your Valuable Review submitted successfully");
          form.reset();
        }
      })
      .catch((er) => console.error(er))
      .finally(() => {
        setLoading(false);
      });
  };

      
    return (
      <div>
        {user?.uid ? (
          <>
            <Container>
              <div className="text-center text-light">
                <h3 className="  m-3 fw-bold ">
                  {title} Reviews
                  <hr className="fw-bold text-light mb-2" />
                </h3>
              </div>

              <AllReviews key={id} id={id}></AllReviews>
              <div className="form-group border border-0 rounded p-3 shadow m-3 bg-light">
                <Form onSubmit={handleLogin}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FontAwesomeIcon
                      className="me-2 faFacebook"
                      icon={faStar}
                    ></FontAwesomeIcon>
                    <Form.Label className="pink mt-2 fw-bold">
                      Rating
                    </Form.Label>

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
                      className="me-2  faFacebook"
                      icon={faComment}
                    ></FontAwesomeIcon>
                    <Form.Label className="pink fw-bold">
                      Your Review
                    </Form.Label>
                    <FloatingLabel
                      controlId="floatingTextarea2"
                      label="Comments"
                    >
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
                      className="btn btn-bg-pink text-white  border-0  rounded w-50 p-2"
                      type="submit"
                    >
                      Add Review
                    </button>
                  </div>

                  {/* <Form.Text className="text-danger">{error}</Form.Text> */}
                </Form>
              </div>
            </Container>
          </>
        ) : (
          <Container>
            <div className="text-center text-light">
              <h3 className="  m-3 fw-bold ">
                Psychare Therapia Reviews
                <hr className="fw-bold" />
              </h3>
            </div>
            <AllReviews key={id} id={id}></AllReviews>
            <div className="text-center text-white fs-4  fw-bold py-5 ">
              <span className=" text-white  me-2">Please </span>
              <Link className="text-light-blue me-2" to="/login">
                Login
              </Link>
               
           

              <span className="text-white ">to add a review</span>
            </div>
          </Container>
        )}
      </div>
    );
};
 
 export default AddReview;
