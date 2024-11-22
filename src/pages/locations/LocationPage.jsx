import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { pageData } from '../../location'; // Ensure 'pageData' is structured correctly.
import './location.css';
import '../Venue/venue.css'
import '../home/home.css'
import eb from '../../images/bill-check-svgrepo-com.svg';
import invesment from '../../images/location-in.svg';
import subsidy from '../../images/allowance-svgrepo-com.svg';
import maintenance from '../../images/location-maintenence.svg';
import HomeRepairServiceIcon from '../../images/business-bag-svgrepo-com.svg';
import SavingsIcon from '../../images/piggy-bank-check-svgrepo-com.svg';
import SecurityIcon from '../../images/energy-svgrepo-com (1).svg';
import HomeIcon from '../../images/home-1-svgrepo-com.svg';
import WhyChooseUs from '../../components/Whychooseus';
import booking from "../../images/booking.svg"
import tracking from "../../images/track.svg"
import reviewimg from '../../images/review.svg'
import solar from "../../images/solar.svg"
import Review from '../../components/review';
import FAQ from '../../components/Faq';
import { Link } from 'react-router-dom';

function LocationPage({ pagekey }) {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the page is rendered or updated
  }, [pagekey]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    city: '',
    solarFor: '',
    electricityBill: '',
    financeInterest: '',
  });

  // Ensure 'pageData' exists and corresponds to the provided 'pagekey'
  const data = pageData[pagekey];
  if (!data) return <div>Page not found</div>;  // Fallback UI if no data is available for the page

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Add form submission logic, like calling an API to save data
  };

  const points = [
    { icon: HomeRepairServiceIcon , title: "Lower Your Bills", description: "Reduce monthly costs by switching to efficient solar energy." },
    { icon: SavingsIcon, title: "Eco-Friendly", description: "Support a cleaner planet by reducing carbon footprint." },
    { icon: HomeIcon , title: "Increased Home Value", description: "Homes with solar panels have higher resale value." },
    { icon: SecurityIcon , title: "Reliable Energy", description: "Enjoy stable power with minimal maintenance." },
  ];

  const steps = [
    { title: "Book a Free Consultation", description: "Schedule a consultation with our solar experts.", icon: booking },
    { title: "Review Proposal & Confirm Order", description: "Receive a detailed proposal tailored to your site.", icon: reviewimg },
    { title: "Track Project Installation", description: "Keep tabs on each stage of the installation process.", icon: tracking },
    { title: "Your Site is Solar Powered", description: "Celebrate as your property begins harnessing the sun.", icon: solar },
  ];

  return (
    <div className="location">
      <div className="location-banner">
        <Container>
          <Row>
            <Col>
              <div>
                <h2>Embrace Solar Power in {data.title}: A Smarter Way to Save on Energy</h2>
                <div className="location-content">
                  <img src={eb} alt="" height={50} />
                  <span>Slash Your Electricity Bills</span>
                </div>
                <div className="location-content">
                  <img src={invesment} alt="" height={50} />
                  <span>Maximize Your Investment</span>
                </div>
                <div className="location-content">
                  <img src={subsidy} alt="" height={50} />
                  <span>Leverage Government Subsidies</span>
                </div>
                <div className="location-content">
                  <img src={maintenance} alt="" height={50} />
                  <span>Worry-Free Maintenance</span>
                </div>
              </div>
            </Col>
            <Col className='location-col'>
              <div className="location-form">
                <form className="qu" onSubmit={handleSubmit}>
                  <label>Name</label>
                  <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleInputChange} required />
                  <label>Email</label>
                  <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleInputChange} required />
                  <label>Phone</label>
                  <input type="tel" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleInputChange} required />
                  <label>Solar For</label>
                  <select name="solarFor" value={formData.solarFor} onChange={handleInputChange} required>
                    <option value="">Select an Option</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Small Business">Small Business</option>
                  </select>
                  <label>Monthly Electricity Bill</label>
                  <select name="electricityBill" value={formData.electricityBill} onChange={handleInputChange} required>
                    <option value="">Select Range</option>
                    <option value="Below ₹2000">Below ₹2000</option>
                    <option value="₹2000 - ₹5000">₹2000 - ₹5000</option>
                    <option value="₹5000 - ₹10000">₹5000 - ₹10000</option>
                    <option value="Above ₹10000">Above ₹10000</option>
                  </select>
                  <label>Interest in Financing</label>
                  <select name="financeInterest" value={formData.financeInterest} onChange={handleInputChange} required>
                    <option value="">Select Option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Maybe">Maybe</option>
                  </select>
                  <button className="quote" style={{ width: '100px', margin: '10px 0 0 0', display: 'flex', justifyContent: 'center' }}>Submit</button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <WhyChooseUs title={`Why Choose Us for ${data.title}`} points={points} />
      <div className="location-cont">
        <h2>Getin Solar {data.title}: Your Trusted Solar Solutions Partner</h2>
        <Container>
          <Row className="location-cont-row">
            <Col className="location-cont-col" md={12} sm={12} lg={6}>
              <img src={data.image} alt="" />
            </Col>
            <Col md={12} sm={12} lg={6}>
              {data.contents.map((content, index) => (
                <div key={index}>
                  <p>{content}</p>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
      <div className="solar-steps" style={{ marginTop: '4rem' }}>
        <Container>
          <Row>
            <h2>Get Your Solar in Steps</h2>
            {steps.map((step) => (
              <Col key={step.title} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="step-box">
                  <div>
                    <img src={step.icon} alt="" className='step-icon'/>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Review reviews={data.reviews} />
      <FAQ faqs={data.faqs} />
    </div>
  );
}

export default LocationPage;
