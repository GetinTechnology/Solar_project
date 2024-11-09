import React from 'react'
import './about.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


function About() {
  return (
    <div className='about'>
      <div className='about-banner'>
        <h1>About us</h1>
      </div>  
      <Container>
      <section>
        <h2>Our Getin Solar</h2>
        <p> Getin Solar is a dedicated provider of clean and sustainable energy solutions, committed to helping homeowners, businesses, and communities transition to renewable solar energy. With years of expertise in solar power and a passion for environmental impact, we provide tailored solar solutions that drive energy independence and cost savings.At Getin Solar, our mission is simple: to empower individuals and businesses with reliable, eco-friendly solar power that minimizes environmental impact while maximizing energy efficiency. We believe in a future powered by the sun, where clean energy is accessible and affordable for everyone.</p>
      </section>
      <div className="simple-solar-section">
      <h2 className="simple-solar-header">We Make Solar Simple</h2>
      <p className="simple-solar-description">
        Switching to solar is easy with Getin Solar. From consultation to installation, we’ve got you covered.
      </p>
      <div className="steps-container">
        <div className="step-box">
          <div className="step-icon">🌞</div>
          <h3 className="step-title">Personalized Consultation</h3>
          <p className="step-description">We discuss your energy needs and answer all your questions.</p>
        </div>
        <div className="step-box">
          <div className="step-icon">🛠️</div>
          <h3 className="step-title">Customized Solar Design</h3>
          <p className="step-description">Our experts create a solar system designed just for you.</p>
        </div>
        <div className="step-box">
          <div className="step-icon">⚙️</div>
          <h3 className="step-title">Hassle-Free Installation</h3>
          <p className="step-description">Our certified team installs everything safely and efficiently.</p>
        </div>
        <div className="step-box">
          <div className="step-icon">🔧</div>
          <h3 className="step-title">Ongoing Support</h3>
          <p className="step-description">We provide continuous support for optimal performance.</p>
        </div>
      </div>
    </div>
    <div className="work-with-us">
      
    </div>
      </Container>

    </div>
  )
}

export default About