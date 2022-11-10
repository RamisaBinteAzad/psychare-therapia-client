import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { FaRegBookmark, FaShareAlt } from 'react-icons/fa';

const Blogs = () => {
     return (
       <div className="bg-blog w-100 h-100">
         <div className=" p-4 ">
           <Container className="pt-5 h-100">
             <Row xs={1} md={2} className="g-4 ">
               <Col className="  ">
                 <Card className="h-100">
                   <Card.Header className="d-flex justify-content-between align-items-center">
                     <div className="d-flex">
                       <Image
                         roundedCircle
                         className="me-2"
                         src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                         style={{ height: "40px" }}
                       ></Image>
                       <div>
                         <p className="mb-0 blog-title-color fw-bold">
                           Colt Steele
                         </p>
                         <p> October 17, 2022</p>
                       </div>
                     </div>
                     <div>
                       <FaRegBookmark className="me-2"></FaRegBookmark>
                       <FaShareAlt></FaShareAlt>
                     </div>
                   </Card.Header>
                   <Card.Body className="p-4">
                     <Card.Img
                       variant="top"
                       src="https://www.kadamtech.com/wp-content/uploads/2019/01/sql-vs-no-sql-1.png"
                       className="img-fluid"
                     />
                     <Card.Title className="dark-blue fw-bold mt-3">
                       What Are The Differences between SQL and NoSQL?
                       <hr />
                     </Card.Title>
                     <Card.Text className="text-muted">
                       The Difference between SQL and NoSQL is:
                       <ul>
                         <li>
                           {" "}
                           SQL is RELATIONAL DATABASE MANAGEMENT SYSTEM
                           (RDBMS).Wheras NoSQL is Non-relational or distributed
                           database system.
                         </li>
                         <li>
                           {" "}
                           SQL databases have fixed or static or predefined
                           schema but NoSQL databases have dynamic schema
                         </li>
                         <li>
                           {" "}
                           SQL databases are best suited for complex queries but
                           NoSQL databases databases are not so good for complex
                           queries
                         </li>
                       </ul>{" "}
                     </Card.Text>
                   </Card.Body>
                 </Card>
               </Col>
               <Col className="  ">
                 <Card className="h-100">
                   <Card.Header className="d-flex justify-content-between align-items-center">
                     <div className="d-flex">
                       <Image
                         roundedCircle
                         className="me-2"
                         src="https://media.istockphoto.com/photos/portrait-of-confident-young-professional-smiling-at-camera-picture-id1347993286?b=1&k=20&m=1347993286&s=170667a&w=0&h=NNGXq-1lhsQmUGqKyP96CHjvFwgwTDAykGMfP3s8IE4="
                         style={{ height: "40px" }}
                       ></Image>
                       <div>
                         <p className="mb-0 blog-title-color fw-bold">
                           Andrei Neagoie
                         </p>
                         <p> October 5, 2022</p>
                       </div>
                     </div>
                     <div>
                       <FaRegBookmark className="me-2"></FaRegBookmark>
                       <FaShareAlt></FaShareAlt>
                     </div>
                   </Card.Header>
                   <Card.Body className="p-4">
                     <Card.Img
                       variant="top"
                       src="https://supertokens.com/covers/what-is-jwt-cover.png"
                       className="img-fluid"
                     />
                     <Card.Title className="dark-blue fw-bold mt-3">
                       What is JWT, and how does it work?
                       <hr />
                     </Card.Title>
                     <Card.Text className="text-muted">
                       JSON Web Token (JWT) is an open standard (RFC 7519) that
                       defines a compact and self-contained way for securely
                       transmitting information between parties as a JSON
                       object. This information can be verified and trusted
                       because it is digitally signed.
                       <br />
                       <ul>
                         <li>
                           {" "}
                           User sign-in using username and password or
                           google/facebook. Authentication server verifies the
                           credentials and issues a jwt signed using either a
                           secret salt or a private key.
                         </li>
                         <li>
                           {" "}
                           User's Client uses the JWT to access protected
                           resources by passing the JWT in HTTP Authorization
                           header.
                         </li>
                         <li>
                           {" "}
                           Resource server then verifies the authenticity of the
                           token using the secret salt/ public key.
                         </li>
                       </ul>{" "}
                     </Card.Text>
                   </Card.Body>
                 </Card>
               </Col>
               <Col className="  ">
                 <Card className="h-100">
                   <Card.Header className="d-flex justify-content-between align-items-center">
                     <div className="d-flex">
                       <Image
                         roundedCircle
                         className="me-2"
                         src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                         style={{ height: "40px" }}
                       ></Image>
                       <div>
                         <p className="mb-0 blog-title-color fw-bold">
                           Dr. Ryan Ahmed
                         </p>
                         <p> October 20, 2022</p>
                       </div>
                     </div>
                     <div>
                       <FaRegBookmark className="me-2"></FaRegBookmark>
                       <FaShareAlt></FaShareAlt>
                     </div>
                   </Card.Header>
                   <Card.Body className="p-4">
                     <Card.Img
                       variant="top"
                       src="https://www.atliq.com/wp-content/uploads/2022/06/Know-the-difference-between-javascript-and-node-js-1-1-1.jpg"
                       className="img-fluid"
                     />
                     <Card.Title className="dark-blue fw-bold mt-3">
                       What is the difference between javascript and NodeJS?
                       <hr />
                     </Card.Title>
                     <Card.Text className="text-muted">
                       The Difference between javascript and NodeJS is:
                       <br />
                       <ul>
                         <li>
                           {" "}
                           JavaScript is a client-side scripting language that
                           is lightweight, cross-platform, and interpreted. Both
                           Java and HTML include it. Node.js, on the other hand,
                           is a V8-based server-side programming language.
                         </li>
                         <li>
                           {" "}
                           JavaScript is a simple programming language that can
                           be used with any browser that has the JavaScript
                           Engine installed. Node.js, on the other hand, is an
                           interpreter or execution environment for the
                           JavaScript programming language. It requires
                           libraries that can be conveniently accessed from
                           JavaScript programming to be more helpful.
                         </li>
                       </ul>{" "}
                     </Card.Text>
                   </Card.Body>
                 </Card>
               </Col>
               <Col className="  ">
                 <Card className="h-100">
                   <Card.Header className="d-flex justify-content-between align-items-center">
                     <div className="d-flex">
                       <Image
                         roundedCircle
                         className="me-2"
                         src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                         style={{ height: "40px" }}
                       ></Image>
                       <div>
                         <p className="mb-0 blog-title-color fw-bold">
                           Colt Steele
                         </p>
                         <p> October 25, 2022</p>
                       </div>
                     </div>
                     <div>
                       <FaRegBookmark className="me-2"></FaRegBookmark>
                       <FaShareAlt></FaShareAlt>
                     </div>
                   </Card.Header>
                   <Card.Body className="p-4">
                     <Card.Img
                       variant="top"
                       src="https://www.linuxenespañol.com/wp-content/uploads/2020/12/Como-instalar-Node.js-en-Linux-1-960x540.png"
                       className="img-fluid"
                     />
                     <Card.Title className="dark-blue fw-bold mt-3">
                       How does NodeJS handle multiple requests at the same
                       time?
                       <hr />
                     </Card.Title>
                     <Card.Text className="text-muted">
                       <ul>
                         <li>
                           {" "}
                           NodeJS receives multiple client requests and places
                           them into EventQueue. NodeJS is built with the
                           concept of event-driven architecture. NodeJS has its
                           own EventLoop which is an infinite loop that receives
                           requests and processes them. EventLoop is the
                           listener for the EventQueue.
                         </li>
                         <li>
                           {" "}
                           If NodeJS can process the request without I/O
                           blocking then the event loop would itself process the
                           request and sends the response back to the client by
                           itself. But, it is possible to process multiple
                           requests parallelly using the NodeJS cluster module
                           or worker_threads module.
                         </li>
                       </ul>{" "}
                     </Card.Text>
                   </Card.Body>
                 </Card>
               </Col>
             </Row>
           </Container>
         </div>
       </div>
     );
};

export default Blogs;