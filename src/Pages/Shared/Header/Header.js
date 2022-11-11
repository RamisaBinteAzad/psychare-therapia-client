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
          <Nav className="nav-font mx-auto fs-5 fw-bold ">
            <Link className="nav-style-home hover-link me-4" to="/">
              Home
            </Link>
            <Link className="nav-style  pink  me-4" to="/blog">
              Blogs
            </Link>

            <>
              {user?.uid ? (
                <>
                  <span className="pink">{user?.displayName}</span>
                  <Link className="nav-style  pink  ms-3 me-3" to="/myReviews">
                    My Reviews
                  </Link>
                  <Link className="nav-style  pink " to="/addService">
                   Add Service
                  </Link>
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
            <Link className='me-1'>
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
