import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Services({ Services, head }) {
  return (
    <div className="services-container">
      <h2 className="headings">Our Services In {head}</h2>
      <Container>
        <Row>
          {Services.map((service, index) => {
            const IconComponent = service.icimg; // Use as a dynamic component
            return (
              <Col key={index} lg={3} md={4} sm={6} xs={12}>
                <div className="services-box">
                  {/* Icon */}
                  <div className="service-box-svg">
                    {typeof IconComponent === 'function' ? (
                      <IconComponent style={{ fontSize: '2rem', color: '#fff' }} />
                    ) : (
                      <IconComponent style={{ fontSize: '2rem', color: '#fff' }} />
                    )}
                  </div>
                  {/* Content */}
                  <div className="service-box-1">
                    <h3>{service.title}</h3>
                    <img src={service.img} alt={service.title} />
                    <p>{service.content}</p>
                  </div>
                  {/* Button */}
                  <div className="services-box-btn">
                    <button className="quote">Read More</button>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Services;
