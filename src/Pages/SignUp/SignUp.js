import React, { useContext, useState } from 'react';
 
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGoogle, FaGithub } from "react-icons/fa";
import {
  faEnvelope,
  faLock,
  faUser,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import "./SignUp.css";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const SignUp = () => {
     const [error, setError] = useState("");
    const [accepted, setAccepted] = useState(false);
    const navigate = useNavigate();
     const location = useLocation();
    const from = location.state?.from?.pathname || "/login";
     const { createUser, updateUserProfile} =
       useContext(AuthContext);
      const handleSignUp = (event) => {
          event.preventDefault();
          const form = event.target;
          const name = form.name.value;
          const photoURL = form.photoURL.value;
          const email = form.email.value;
          const password = form.password.value;
          console.log(name, photoURL, email, password);

          createUser(email, password)
            .then((result) => {
              const user = result.user;
              setError("");
              console.log(user);
              form.reset();
               toast.success("Sign Up Successfully");
              handleUpdateUserProfile(name, photoURL);
              
            })
            .catch((e) => {
              console.error(e);
               toast.error(`${error.message}`);
              setError(e.message);
            });
           navigate(from, { replace: true });
    };
      const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
          displayName: name,
          photoURL: photoURL,
        };

        updateUserProfile(profile)
          .then(() => {})
          .catch((error) => console.error(error));
    };
     const handleAccepted = (event) => {
       console.log(event.target.checked);
       setAccepted(event.target.checked);
     };

    return (
      <Container fluid>
        <Row className="">
          <Col lg="6" md="12">
            <Container
              className="h-100
                           d-flex justify-content-center"
            >
              <div className="w-75  my-3">
                <h1 className="dark-blue display-4 text-center ">
                  Sign Up
                  <span className="pink">Your Account</span>
                </h1>

                <Form onSubmit={handleSignUp}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FontAwesomeIcon
                      className="me-2 faFacebook"
                      icon={faUser}
                    ></FontAwesomeIcon>
                    <Form.Label className="pink   mt-2 fw-bold">
                      Full Name
                    </Form.Label>
                    <Form.Control
                      className="rounded-pill px-4 py-2"
                      name="name"
                      type="text"
                      placeholder="Enter your Full Name"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FontAwesomeIcon
                      className="me-2 faFacebook"
                      icon={faImage}
                    ></FontAwesomeIcon>
                    <Form.Label className=" pink mt-2 fw-bold">
                      Photo URL
                    </Form.Label>
                    <Form.Control
                      className="rounded-pill px-4 py-2"
                      name="photoURL"
                      type="text"
                      placeholder="Profile Pic"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FontAwesomeIcon
                      className="me-2  faFacebook "
                      icon={faEnvelope}
                    ></FontAwesomeIcon>
                    <Form.Label className="pink mt-2 fw-bold">
                      Email address
                    </Form.Label>
                    <Form.Control
                      className="rounded-pill px-4 py-2"
                      name="email"
                      type="email"
                      placeholder="Enter email"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <FontAwesomeIcon
                      className="me-2   faFacebook"
                      icon={faLock}
                    ></FontAwesomeIcon>
                    <Form.Label className=" pink fw-bold">Password</Form.Label>
                    <Form.Control
                      className="rounded-pill px-4 py-2"
                      name="password"
                      type="password"
                      placeholder="Password"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      onClick={handleAccepted}
                      label={
                        <>
                          <span className="text-light-mediumvioletred">
                            Accept{" "}
                          </span>{" "}
                          <Link to="/terms">Terms and conditions</Link>
                        </>
                      }
                    />
                  </Form.Group>

                  <div className="text-center">
                    <Button
                      variant="primary"
                      className="btn btn-bg-navy text-white  border-0  rounded w-50 p-2 text-center"
                      type="submit"
                      disabled={!accepted}
                    >
                      Sign Up
                    </Button>
                  </div>

                  <Form.Text className="text-danger">{error}</Form.Text>
                </Form>
              </div>
            </Container>
          </Col>
          <Col lg="6" md="12" sm="12" className="  mb-0 me-0 p-0 bg-register">
            <Container className=" h-100 img-fluid d-flex justify-content-center align-items-center text-center     ">
              <div className="w-50   ">
                <h1 className="text-orange fw-bold display-4 mt-5  ">
                  Already <br />
                  <span className="text-pale-lime-green">a member?</span>
                </h1>
                <p className="text-light-blue">
                  Sign In and Join to get personalized help,share your thoughts
                  and feelings without fear of judgement.
                </p>
                <Link to="/login">
                  <button className="btn btn-bg-pink border-0 text-white rounded-pill w-50 p-2">
                    Sign in
                  </button>
                </Link>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    );
};

export default SignUp;