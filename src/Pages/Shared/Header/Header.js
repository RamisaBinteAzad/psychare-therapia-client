import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../../assets/icons/psychology.png'
import './Header.css'
 
 

const Header = () => {
   
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
            <Link className="nav-style-home hover-link me-lg-4" to="/">
              Home
            </Link>

            {/* <Link className="nav-style  me-lg-4" to="/courses">
              Courses
            </Link>
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
