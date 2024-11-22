import React, { useState,useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './contact.css';

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    city: '',
    solarFor: '',
    electricityBill: '',
    financeInterest: '',
    message: ''
  });

  const statesAndCities = {
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
    "Karnataka": ["Bangalore", "Mysore", "Mangalore"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur"]
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <div className='contact'>
      <div className='contact-banner'>
        <h1>Contact Us</h1>
        <p>Ready to make the switch to sustainable solar power? Whether you’re a homeowner, small business owner, or managing a commercial property, we’re here to help. Get in touch with our team today and start your journey toward energy independence and savings. Let's harness the power of the sun, together!</p>
      </div>
      
      <Container className="contact-form-container">
        <Row>
          <Col lg={6} className="contact-info">
            <h2>Get in Touch</h2>
            <p>Have questions or want to learn more about our solar solutions? Fill out the form, and we’ll get back to you shortly.</p>
            <p><strong>Phone:</strong> +91 89258 31826</p>
            <p><strong>Email:</strong> enquiry@getintech.in</p>
            <p><strong>Address:</strong> 971G/6, Kalki Street, Manthithoppu Road, Krishna Nagar, Kovilpatti – 628502</p>
            
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.0063810128936!2d77.85024967478219!3d9.153895390912508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xafc0deb432f728e7%3A0xab9157c9b333e21a!2sGetin%20Technologies%20Kovilpatti!5e0!3m2!1sen!2sin!4v1732256789635!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Col>

          <Col lg={6} className="contact-info-1">
            <Form className="contact-form" onSubmit={handleSubmit}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleInputChange} required />
              </Form.Group>
              
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleInputChange} required />
              </Form.Group>

              <Form.Group controlId="formPhone" className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="tel" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleInputChange} required />
              </Form.Group>
              
              <Form.Group controlId="formState" className="mb-3">
                <Form.Label>State</Form.Label>
                <Form.Select name="state" value={formData.state} onChange={handleInputChange} required>
                  <option value="">Select State</option>
                  {Object.keys(statesAndCities).map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="formCity" className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Select name="city" value={formData.city} onChange={handleInputChange} required disabled={!formData.state}>
                  <option value="">Select City</option>
                  {formData.state && statesAndCities[formData.state].map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </Form.Select>
              </Form.Group>
              
              <Form.Group controlId="formSolarFor" className="mb-3">
                <Form.Label>Solar For</Form.Label>
                <Form.Select name="solarFor" value={formData.solarFor} onChange={handleInputChange} required>
                  <option value="">Select an Option</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Small Business">Small Business</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="formElectricityBill" className="mb-3">
                <Form.Label>Monthly Electricity Bill</Form.Label>
                <Form.Select name="electricityBill" value={formData.electricityBill} onChange={handleInputChange} required>
                  <option value="">Select Range</option>
                  <option value="Below ₹2000">Below ₹2000</option>
                  <option value="₹2000 - ₹5000">₹2000 - ₹5000</option>
                  <option value="₹5000 - ₹10000">₹5000 - ₹10000</option>
                  <option value="Above ₹10000">Above ₹10000</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="formFinanceInterest" className="mb-3">
                <Form.Label>Interest in Financing</Form.Label>
                <Form.Select name="financeInterest" value={formData.financeInterest} onChange={handleInputChange} required>
                  <option value="">Select Option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Maybe">Maybe</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-4">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" rows={5} placeholder="Write your message here" value={formData.message} onChange={handleInputChange} required />
              </Form.Group>

              <Button variant="primary" type="submit" className="contact-submit-button">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
