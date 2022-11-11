import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  Row,
  ToastContainer,
} from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import "./Login.css";

const Login = () => {
  const [error, setError] = useState("");
  const { login, setLoading, user } = useContext(AuthContext);
   
  const location = useLocation();
  // <Navigate to="/location" state={{ from: login }} replace></Navigate>;
  
  console.log('Login',location);
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
   console.log("from", location);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
   

    login(email, password)
        
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError(" ");
        
        if (user?.email) {
           toast.success("Login Successfully");
          navigate(from, { replace: true });
        }
          
      })

      .catch((error) => {
        console.error(error);
        toast.error(`${error.message}`);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
   
    
          
  };
  const { googleSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError(" ");
        if (user?.email) {
            toast.success("Login Successfully");
           navigate(from, { replace: true });
         } 
      })
      .then((error) => console.error(error));
   
  };

  return (
    <div className="banner-section  w-100 h-100">
      <Container fluid>
        <Row className="">
          <Col lg="6">
            <Container
              className="h-75
                            p-5 d-flex justify-content-center"
            >
              <div className="w-75 ">
                <div className="text-center">
                  <h1 className="dark-blue display-4 text-center ">
                    Login To Your Account
                  </h1>
                  <p className="  text-center main fs-5 pink fw-bold   ">
                    Login using Social Networks
                  </p>

                  <Button
                    onClick={handleGoogleSignIn}
                    className="text-center me-2 ms-5 btn-color-change-google"
                    variant="outline-primary"
                  >
                    <FaGoogle></FaGoogle> Login with Google
                  </Button>
                </div>

                <div className="divider-container">
                  <div className="line"></div>
                  <h1 className="title2">Or</h1>
                  <div className="line"></div>
                </div>
                <Form onSubmit={handleLogin}>
                  <ToastContainer></ToastContainer>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FontAwesomeIcon
                      className="me-2 faFacebook"
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
                    <Form.Label className="pink fw-bold">Password</Form.Label>
                    <Form.Control
                      className="rounded-pill px-4 py-2"
                      name="password"
                      type="password"
                      placeholder="Password"
                      required
                    />
                  </Form.Group>
                  <div className="text-center">
                    <button className="btn btn-bg-navy text-white  border-0  rounded w-50 p-2">
                      Login
                    </button>
                  </div>

                  <Form.Text className="text-danger">{error}</Form.Text>
                </Form>
              </div>
            </Container>
          </Col>
          <Col lg="6" className="me-0 p-0 bg-login">
            <Container className="h-100 img-fluid d-flex justify-content-center align-items-center text-center  p-4   ">
              <div className="w-50   ">
                <h1 className="text-info fw-bold display-4 mt-5  ">
                  New Here?
                </h1>
                <p className="text-gray">
                  Sign Up And Heal Your Mind And Soul With Our Therapy Services.
                </p>
                <Link to="/signup">
                  <button className="btn btn-bg-pink border-0 text-white rounded-pill w-50 p-2">
                    Sign Up
                  </button>
                </Link>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
