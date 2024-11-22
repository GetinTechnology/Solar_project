import React, { useRef,useEffect } from 'react';
import './about.css'
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import person from '../../images/dummy.jpg'
import et from '../../images/electric-tower-power-line-svgrepo-com.svg'
import ss from '../../images/solar-energy-svgrepo-com.svg'
import home from '../../images/home-1-svgrepo-com.svg'
import cs from '../../images/customer-service-svgrepo-com.svg'


function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
        <p>Getin Solar is a leading provider of clean, sustainable energy solutions, helping homeowners, businesses, and communities transition to renewable solar power. With years of expertise, we offer tailored solar solutions that promote energy independence and cost savings. </p>

      </div>

      <div className="work-with-us">
    <h2 className='headings'>Why Work With Us?</h2>
    <Container className="main-content">
        <Row>
            <Col lg={6} className="left-section">
                <div className="card">
                    <h3>Personalized Solutions, Not a One-Size-Fits-All Approach</h3>
                    <p className="others">Many solar companies offer standard packages that might not fully address your unique needs.</p>
                    <p className="us">Our custom-designed solar solutions maximize energy production and cost efficiency, tailored just for you.</p>
                </div>
          
            </Col>
            <Col>
            <div className="card">
                    <h3>Transparency and Trust Throughout the Process</h3>
                    <p className="others">Solar providers often have hidden fees and unclear timelines.</p>
                    <p className="us">We promise a clear breakdown of all costs, timelines, and work involved from start to finish.</p>
                </div>
            </Col>
            <Col lg={6} className="right-section">
                <div className="card">
                    <h3>End-to-End Service with Comprehensive Support</h3>
                    <p className="others">Many companies focus only on installation.</p>
                    <p className="us">We provide ongoing support and system monitoring to ensure peak performance of your solar panels.</p>
                </div>

            </Col>
            <Col>
            <div className="card">
                    <h3>Commitment to Sustainability and Quality</h3>
                    <p className="others">Some companies prioritize rapid installations over quality.</p>
                    <p className="us">We source high-quality materials and uphold stringent standards on every project.</p>
                </div>
            </Col>
        </Row>
    </Container>
</div>


      <div className='made-easy-container'>
      <h2 className='headings'>Switch to Solar Made Easy</h2>

        <Container>
        <Row>
        <Col>
          <div className='made-easy'>
          <img src={et} alt="" />
          <h4>Existing Grid</h4>
          <p>The traditional power grid relies heavily on non-renewable energy sources like coal, gas, and oil, which contribute significantly to air pollution and global warming. Moreover, the costs of grid electricity have been rising steadily, leaving customers with no control over their energy expenses. This outdated system is not only expensive but also harmful to the environment, limiting customer choice and sustainability..</p>
          </div>
        </Col>
        <Col>
        <div className='made-easy'>
        <img src={ss} alt="" />

          <h4>Smart Solar Solution</h4>
          <p>The traditional power grid relies heavily on non-renewable energy sources like coal, gas, and oil, which contribute significantly to air pollution and global warming. Moreover, the costs of grid electricity have been rising steadily, leaving customers with no control over their energy expenses. This outdated system is not only expensive but also harmful to the environment, limiting customer choice and sustainability..</p>
          </div>
        </Col>
        <Col>
        <div className='made-easy'>
        <img src={home} alt="" />

          <h4>Future Grid</h4>
          <p>Imagine a decentralized energy system where power is generated and consumed locally. Solar power enables a clean and sustainable energy future by reducing dependence on centralized grids. By harnessing sunlight, you not only reduce your carbon footprint but also contribute to a greener, more resilient power network. This transformation makes solar energy the cornerstone of a reliable and eco-friendly grid.</p>
          </div>
        </Col>
        <Col>
        <div className='made-easy'>
        <img src={cs} alt="" />

          <h4>Customer Support</h4>
          <p>Switching to solar can feel overwhelming, but with our dedicated customer support, the process is effortless. From initial consultation to installation and after-sales service, we ensure a smooth and hassle-free experience. Our team of experts is always available to answer your questions, provide technical assistance, and guide you at every step of your solar journey, ensuring you get the most out of your investment.</p>
          </div>
        </Col>
      </Row>

        </Container>
      </div>
      

      <div className="meetourteam">
        <h2 className='headings'>Meet Our Team</h2>

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