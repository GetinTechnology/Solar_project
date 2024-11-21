
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const WhyChooseUs = ({ title, points }) => {
  return (
    <div className="why-choose-us-section">
      <Container>
        <h2 className="why-choose-title">{title}</h2>
        <Row>
          {points.map((point, index) => (
            <Col key={index} sm={6} lg={3} className="why-choose-col">
              <div className="why-choose-box">
                <div className="why-choose-icon">
                  <img src={point.icon} alt="" />
                </div>
                <h3 className="why-choose-point-title">{point.title}</h3>
                <p>{point.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
