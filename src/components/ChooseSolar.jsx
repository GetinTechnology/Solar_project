import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ConstructionIcon from '@mui/icons-material/Construction';
import BoltIcon from '@mui/icons-material/Bolt';

const steps = [
  { title: "Book a Free Consultation", description: "Schedule a consultation with our solar experts.", icon: <EventAvailableIcon /> },
  { title: "Review Proposal & Confirm Order", description: "Review and confirm the proposal tailored for your site.", icon: <AssignmentIcon /> },
  { title: "Track Project Installation", description: "Monitor each step of the installation process.", icon: <ConstructionIcon /> },
  { title: "Your Site is Solar Powered", description: "Your site is now generating clean energy from the sun.", icon: <BoltIcon /> },
];

function ChooseSolar() {
  return (
    <Container className="choose-solar-container">
      <Row className="steps-container">
        {steps.map((step, index) => (
          <Col key={index} sm={12} md={3} lg={2} className="step-box-container">
            {(index >= 0 && index !== 3) && <div className="step-arrow">→</div>} {/* Only show arrow after the first step */}
            <div className="step-box">
              <div className="step-icon">{step.icon}</div>
              <h4 className="step-title">{step.title}</h4>
              <p className="step-description">{step.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ChooseSolar;
