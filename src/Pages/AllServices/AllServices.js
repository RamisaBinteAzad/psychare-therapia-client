import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ServiceCard from "../Home/Services/ServiceCard";

const AllServices = () => {
  const [allServices, setallServices] = useState([]);

  console.log(allServices);
  useEffect(() => {
    fetch("https://psychare-therapia-server.vercel.app/allServices")
      .then((res) => res.json())
      .then((data) => setallServices(data));
  });
  return (
    <div>
      <div className="text-center">
        <span className="display-4 mt-5 fw-bold pink me-3">My</span>
        <span className=" display-4 dark-blue  ">Services</span>
        <p className="fs-6 mb-5 fw-bold text-muted mt-2">
          Complete Set Of Services Provided To Make <br />A Positive Change In
          Your Life.
        </p>
      </div>
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4 mb-5">
          {allServices.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllServices;
