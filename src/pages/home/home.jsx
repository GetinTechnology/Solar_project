import React, { useEffect, useState } from 'react'
import './home.css'
import '../../images/banner.jpg'
import exp from '../../images/experties.svg'
import qul from '../../images/shield-check-svgrepo-com.svg'
import cus from '../../images/puzzle-piece-6-svgrepo-com.svg'
import com from '../../images/headset-svgrepo-com.svg'
import money from '../../images/rupee-2-svgrepo-com.svg'
import eco from '../../images/eco-home-eco-house-svgrepo-com.svg'
import res from '../../images/residential.jpg'
import commercial from '../../images/commercial.jpg'
import small from '../../images/small-business.jpg'
import { Row, Col, Container, Modal } from 'react-bootstrap'
import Calculator from '../../components/Calcultor'
import SavingsIcon from '@mui/icons-material/Savings';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import dummy from '../../images/dummy.jpg'
import FAQ from '../../components/Faq'
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ConstructionIcon from '@mui/icons-material/Construction';
import BoltIcon from '@mui/icons-material/Bolt';
import { Link } from 'react-router-dom'
import Quote from '../../components/quote/Quote'
import { ReactComponent as Quotes } from '../../images/quotes.svg'
import {Helmet} from "react-helmet";


function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const wcu = [
    {
      title: "Experienced Professionals",
      img: exp,
      content: "Our team has years of experience in the solar industry, ensuring that your installation is handled by experts."
    },
    {
      title: "Quality & Durability",
      img: qul,
      content: "We use only top-quality materials and equipment to provide you with reliable, long-lasting solar solutions."
    },
    {
      title: "Customized Solutions",
      img: cus,
      content: "Every home and business is unique. We tailor our solar solutions to meet your specific energy needs and goals"
    },
    {
      title: "Affordable Financing",
      img: money,
      content: "We offer flexible financing options to make solar accessible and affordable for everyone."
    },
    {
      title: "Comprehensive Support",
      img: com,
      content: "Our dedicated support team is here to assist you before, during, and after installation, ensuring your complete satisfaction."
    },
    {
      title: "Commitment to Sustainability",
      img: eco,
      content: "We are dedicated to promoting sustainable energy solutions that protect our planet and future generations."
    },
  ]
  const review = [
    {
      reviewimg: dummy,
      name: "Priya Rajan",
      location: "Chennai, Tamil Nadu",
      review: "Switching to solar energy has truly transformed how we manage energy costs. Since installation, our energy bills have dropped significantly, providing immediate savings.  "
    },
    {
      reviewimg: dummy,
      name: "Arun Kumar",
      location: "Coimbatore, Tamil Nadu",
      review: "Our move to solar power was a smart decision that continues to pay off. Not only has it been a major cost-saver, but the peace of mind that comes from energy independence has been priceless.  "
    },
    {
      reviewimg: dummy,
      name: "Lakshmi Narayanan",
      location: "Madurai, Tamil Nadu",
      review: "Solar energy has been a game-changer for us. The system operates seamlessly with minimal maintenance, and the impact on our energy bills has been immediate.  "
    },
  ]
  const steps = [
    { title: "Book a Free Consultation", description: "Schedule a consultation with our solar experts...", icon: <EventAvailableIcon /> },
    { title: "Review Proposal & Confirm Order", description: "Receive a detailed proposal tailored to your site...", icon: <AssignmentIcon /> },
    { title: "Track Project Installation", description: "Keep tabs on each stage of the installation process...", icon: <ConstructionIcon /> },
    { title: "Your Site is Solar Powered", description: "Celebrate as your property begins harnessing the sun...", icon: <BoltIcon /> },
  ];
  const faqs = [
    { question: "What is solar energy?", answer: "Solar energy is the energy from the sun that is converted into thermal or electrical energy." },
    { question: "How does solar power work?", answer: "Solar power works by converting sunlight into electricity using photovoltaic (PV) cells." },
    { question: "Is solar energy environmentally friendly?", answer: "Yes, solar energy is a clean and renewable resource that reduces carbon emissions." },
    { question: "How long do solar panels last?", answer: "Most solar panels have a lifespan of 25-30 years, depending on the brand and maintenance." },
    { question: "What are the benefits of solar energy?", answer: "Solar energy reduces energy bills, lowers carbon footprint, and provides energy independence." },
  ];
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleClose = () => setModalIsOpen(false);
  const handleShow = () => setModalIsOpen(true);
  return (
    <>
    <Helmet>
      
    </Helmet>
      <div className='banner'>
        <Container>
          <div className='banner-content'>
            <h1>Unlock the Power of Solar Energy for Your Home</h1>
            <p>Take the first step toward a sustainable future by embracing solar energy. Say goodbye to high electricity bills and hello to long-term savings. Experience the benefits of clean, renewable power while reducing your carbon footprint. Transform your home into a beacon of sustainability and efficiency today!</p>
            <button className='quote' onClick={handleShow}>Get A Quote</button>
          </div>
        </Container>
      </div>
      <div className="banner-bottom">
        <Container>
          <Row>
            <Col sm={12} lg={4} md={4}>
              <div className='banner-bottom-box box-1'>
                <SavingsIcon className='banner-bottom-box-icon'></SavingsIcon>
                <h2>Save on Energy <br />Bills</h2>
                <p>Reduce your monthly bills and enjoy long-term savings with our high-efficiency solar systems. Say goodbye to rising electricity costs!</p>
              </div>
            </Col>
            <Col sm={12} lg={4} md={4}>
              <div className='banner-bottom-box box-2'>
                <EnergySavingsLeafIcon className='banner-bottom-box-icon'></EnergySavingsLeafIcon>
                <h2>Reduce Your Carbon Footprint</h2>
                <p>By switching to solar, you’re supporting a cleaner, greener environment. Join us in making a positive impact on the planet with renewable energy.</p>
              </div>
            </Col>
            <Col sm={12} lg={4} md={4}>
              <div className='banner-bottom-box box-3'>
                <BuildCircleIcon className='banner-bottom-box-icon'></BuildCircleIcon>
                <h2>Reliable and Low Maintenance</h2>
                <p>Our solar panels are designed for durability and low maintenance, providing you with reliable energy for years to come.</p>
              </div>
            </Col>
          </Row>
        </Container>

      </div>
      <div className="saving-calculater">
        <Calculator />
      </div>
      <div className="why-choose-us">
        <Container>
          <h2 className='headings'>Why Choose Us</h2>
          <p>At Getin, we’re committed to making clean energy accessible, affordable, and easy for everyone. With a dedicated team, cutting-edge technology, and customized solutions tailored to your specific needs, we ensure a seamless transition to solar power. Trust us to help you achieve energy independence while contributing to a sustainable future.</p>
          <Row>
            {wcu.map((content) => {
              return <Col lg={4} >
                <div className='wcu-box'>
                  <img src={content.img} alt="" />
                  <h3>{content.title}</h3>
                  <p>{content.content}</p>
                </div>

              </Col>
            })}
          </Row>
        </Container>
      </div>
      <div className='segments'>
        <Container>
          <h2 className='headings'>Our Segments</h2>
          <Row>
            <Col sm={12} md={4} lg={4}>
              <Link to='/venue/residential'>
                <div className='segment'>
                  <img src={res} alt="" />
                  <div className='se-name'>
                    <h3>Residential</h3>
                  </div>
                </div>
              </Link>

            </Col>
            <Col sm={12} md={4} lg={4}>
              <Link to="/venue/commercial">
                <div className='segment'>
                  <img src={commercial} alt="" />
                  <div className='se-name'>
                    <h3>Commercial</h3>
                  </div>
                </div>
              </Link>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <Link to="/venue/smallbusiness">
                <div className='segment'>
                  <img src={small} alt="" />
                  <div className='se-name'>
                    <h3>Small Bussiness</h3>
                  </div>
                </div>
              </Link>

            </Col>
          </Row>
        </Container>
      </div>
      <div className='solar-steps'>
        <Container>
          <Row>
            <h2 className='headings'>Get Your Solar in Steps</h2>
            {steps.map((step) =>
            (<Col key={step.title} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} sm={12} md={6} lg={3}>
              <div className='step-box'>
                <div>{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </Col>)
            )}
          </Row>
        </Container>
      </div>
      <div className="review">
        <h2 className='headings'>Customers Review</h2>
        <Container>
          <Row className='review-container'>

            {
              review.map((review) => (
                <Col lg={4} key={review.name}>
                  <div className='review-box'>
                    <div className="review-box-top">
                      <div className='review-box-top-1'>
                        <img src={review.reviewimg} alt="" />
                        <div className='review-box-top-content'>
                          <p>{review.name}</p>
                          <p>{review.location}</p>
                        </div>
                      </div>
                      <Quotes className="review-box-top-2" />
                    </div>
                    <div className='review-box-content'>
                      <p className='review-box-content-p'>{review.review}</p>
                    </div>
                  </div>
                </Col>
              ))
            }

          </Row>
        </Container>
      </div>
      <FAQ faqs={faqs} />
      <Modal show={modalIsOpen} onHide={handleClose}>
        <Quote setModalIsOpen={setModalIsOpen} />
      </Modal>
    </>

  )
}

export default Home