import React, { useRef } from 'react';
import './about.css'
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import person from '../../images/dummy.jpg'




function About() {
  const team = [
    { img: person, name: 'Kumar', role: 'CEO' },
    { img: person, name: 'Anita', role: 'CTO' },
    { img: person, name: 'Rajesh', role: 'COO' },
    { img: person, name: 'Meena', role: 'CFO' },
    { img: person, name: 'Priya', role: 'Marketing Head' },
  ];
  const sliderRef = useRef(null);

  const nextslide = () => {
    sliderRef.current.slickNext();
  };

  const prevslide = () => {
    sliderRef.current.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendDots: dots => <div className="custom-dots">{dots}</div>,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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

      </Container>
      <div className="work-with-us">
    <h2>Why Work with Us?</h2>
    <Container className="main-content">
        <Row>
            <Col lg={6} className="left-section">
                <div className="card">
                    <h3>Personalized Solutions, Not a One-Size-Fits-All Approach</h3>
                    <p className="others">Others: Many solar companies offer standard packages that might not fully address your unique needs.</p>
                    <p className="us">Us: Our custom-designed solar solutions maximize energy production and cost efficiency, tailored just for you.</p>
                </div>
                <div className="card">
                    <h3>Transparency and Trust Throughout the Process</h3>
                    <p className="others">Others: Solar providers often have hidden fees and unclear timelines.</p>
                    <p className="us">Us: We promise a clear breakdown of all costs, timelines, and work involved from start to finish.</p>
                </div>
            </Col>
            <Col lg={6} className="right-section">
                <div className="card">
                    <h3>End-to-End Service with Comprehensive Support</h3>
                    <p className="others">Others: Many companies focus only on installation.</p>
                    <p className="us">Us: We provide ongoing support and system monitoring to ensure peak performance of your solar panels.</p>
                </div>
                <div className="card">
                    <h3>Commitment to Sustainability and Quality</h3>
                    <p className="others">Others: Some companies prioritize rapid installations over quality.</p>
                    <p className="us">Us: We source high-quality materials and uphold stringent standards on every project.</p>
                </div>
            </Col>
        </Row>
    </Container>
</div>

      <div>

        <Container>
          <div className="simple-solar-section">
            <h2 className="simple-solar-header">We Make Solar Simple</h2>
            <p className="simple-solar-description">
              Switching to solar is easy with Getin Solar. From consultation to installation, we’ve got you covered.
            </p>
            <div className="steps-container">
              <div className="step-boxx">
                <div className="step-icon">🌞</div>
                <h3 className="step-title">Personalized Consultation</h3>
                <p className="step-description">We discuss your energy needs and answer all your questions.</p>
              </div>
              <div className="step-boxx">
                <div className="step-icon">🛠️</div>
                <h3 className="step-title">Customized Solar Design</h3>
                <p className="step-description">Our experts create a solar system designed just for you.</p>
              </div>
              <div className="step-boxx">
                <div className="step-icon">⚙️</div>
                <h3 className="step-title">Hassle-Free Installation</h3>
                <p className="step-description">Our certified team installs everything safely and efficiently.</p>
              </div>
              <div className="step-boxx">
                <div className="step-icon">🔧</div>
                <h3 className="step-title">Ongoing Support</h3>
                <p className="step-description">We provide continuous support for optimal performance.</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="meetourteam">
        <h2>Meet Our Team</h2>

        {/* Custom Arrows */}
        <div className="custom-arrow-dots-container">
          <div className="custom-prev-arrow" onClick={prevslide}>←</div>
          <Slider {...settings} ref={sliderRef}>
            {team.map((member, index) => (
              <div key={index} className="team-member">
                <img src={member.img} alt={`${member.name}`} className="team-member-img" />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </Slider>
          <div className="custom-next-arrow" onClick={nextslide}>→</div>
        </div>
      </div>
    </div>
  )
}

export default About