import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../../../assets/icons/psychology.png'
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import './Header.css'
 
 

const Header = () => {
  
  const { user, logOut } = useContext(AuthContext);
   const handleLogOut = () => {
     logOut()
       .then(() => {})
       .catch((error) => console.error(error));
   };
   
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      className="shadow align-items-center py-0   "
      expand="lg"
      bg="white"
      variant="light"
    >
      <Container>
        <Navbar.Brand className=" my-0    py-0">
          <Link className="navbar-brand" to="/">
            <div className="d-flex align-items-center  ">
              <img
                src={logo}
                alt="Logo"
                className="me-2  img-fluid  d-inline-block "
              />
              <div className=" fw-bold     align-items-center    ">
                <span className="fs-3  mt-2 fw-bold pink">Psychare</span>
                <p className=" fs-4 dark-blue my-0">Therapia</p>
              </div>
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className=" mx-auto fs-5 fw-bold ">
            <Link className="nav-style-home hover-link me-5" to="/">
              Home
            </Link>

            <>
              {user?.uid ? (
                <>
                  <span>{user?.displayName}</span>

                  <button
                    type="button"
                    onClick={handleLogOut}
                    className=" rounded   btn  border-0 text-white btn-bg-pink   mx-5 px-3    "
                  >
                    Log Out
                    <FontAwesomeIcon
                      className="ms-2"
                      icon={faSignInAlt}
                    ></FontAwesomeIcon>
                  </button>
                </>
              ) : (
                <>
                  <Link className="pink  me-5" to="/login">
                    Login
                  </Link>
                  <Link to="/signup">
                    
                    <button
                      //   type="button"
                      className=" btn btn-bg-navy text-white  border-0  rounded me-5 p-2"
                    >
                      Sign Up
                      <FontAwesomeIcon
                        className="ms-2"
                        icon={faSignInAlt}
                      ></FontAwesomeIcon>
                    </button>
                  </Link>
                </>
              )}
            </>
            <Link>
              {user ? (
                <Image
                  style={{ height: "30px" }}
                  roundedCircle
                  src={user?.photoURL}
                  className="img-fluid "
                  title={user?.displayName}
                ></Image>
              ) : (
                <FaUser></FaUser>
              )}
            </Link>

            {/* { <Link className="nav-style  me-lg-4" to="/courses">
              Courses
            </Link> }
            <Link className="nav-style  me-lg-4" to="/faq">
              FAQ
            </Link>
            <Link className="nav-style  me-lg-4" to="/blog">
              Blog
            </Link> */}

            {/* <Switch className="switch" onChange={toggleTheme}></Switch> */}

            {/* <>
              {user?.uid ? (
                <>
                  <span>{user?.displayName}</span>
                  <button
                    type="button"
                    onClick={handleLogOut}
                    className="btn btn-danger  w-25 mx-3    "
                  >
                    Log Out
                    <FontAwesomeIcon
                      className="ms-2"
                      icon={faSignInAlt}
                    ></FontAwesomeIcon>
                  </button>
                </>
              ) : (
                <>
                  <Link className="nav-style  me-lg-4" to="/login">
                    Log In
                  </Link>
                  
                </>
              )}
            </> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
