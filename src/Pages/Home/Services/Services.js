import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
  
    ;
  console.log(services);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
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
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </Row>
        <div className="text-center">
          <Link to="/services">
            <button className="btn btn-bg-navy text-white  border-0  btn-lg rounded  px-4 py-2">
              See All
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Services;