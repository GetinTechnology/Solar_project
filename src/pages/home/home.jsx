import React from 'react'
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
import small from '../../images/small business.jpg'
import { Row,Col,Container} from 'react-bootstrap'
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

function Home() {
  const wcu = [
    {
      title:"Experienced Professionals",
      img:exp,
      content:"Our team has years of experience in the solar industry, ensuring that your installation is handled by experts."
    },
    {
      title:"Quality & Durability",
      img:qul,
      content:"We use only top-quality materials and equipment to provide you with reliable, long-lasting solar solutions."
    },
    {
      title:"Customized Solutions",
      img:cus,
      content:"Every home and business is unique. We tailor our solar solutions to meet your specific energy needs and goals"
    },
    {
      title:"Affordable Financing",
      img:money,
      content:"We offer flexible financing options to make solar accessible and affordable for everyone."
    },
    {
      title:"Comprehensive Support",
      img:com,
      content:"Our dedicated support team is here to assist you before, during, and after installation, ensuring your complete satisfaction."
    },
    {
      title:"Commitment to Sustainability",
      img:eco,
      content:"We are dedicated to promoting sustainable energy solutions that protect our planet and future generations."
    },
  ]
  const steps = [
    { title: "Book a Free Consultation", description: "Schedule a consultation with our solar experts...", icon: <EventAvailableIcon /> },
    { title: "Review Proposal & Confirm Order", description: "Receive a detailed proposal tailored to your site...", icon: <AssignmentIcon /> },
    { title: "Track Project Installation", description: "Keep tabs on each stage of the installation process...", icon: <ConstructionIcon /> },
    { title: "Your Site is Solar Powered", description: "Celebrate as your property begins harnessing the sun...", icon: <BoltIcon /> },
  ];
  
  return (
    <>
      <div className='banner'>
      <Container>
      <div className='banner-content'>
        <h1>Power Your Future with Clean, Renewable Energy</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam tenetur minus velit est voluptate nulla dolorem nihil accusamus eaque laborum provident ut modi, animi, quidem veritatis asperiores. Aut, facere rem.</p>
      <button className='quote'>Get A Quote</button>
      </div>  
      </Container>
    </div>
    <div className="banner-bottom">
      <Container>
      <Row>
        <Col sm={12} lg={4} md={4}>
          <div className='banner-bottom-box box-1'>
            <SavingsIcon className='banner-bottom-box-icon'></SavingsIcon>
            <h2>Save on Energy <br/>Bills</h2>
            <p>Reduce your monthly bills and enjoy long-term savings with our high-efficiency solar systems. Say goodbye to rising electricity costs!</p>
          </div>
        </Col>
        <Col sm={12} lg={4} md={4}>
        <div  className='banner-bottom-box box-2'>
          <EnergySavingsLeafIcon className='banner-bottom-box-icon'></EnergySavingsLeafIcon>
            <h2>Reduce Your Carbon Footprint</h2>
            <p>By switching to solar, you’re supporting a cleaner, greener environment. Join us in making a positive impact on the planet with renewable energy.</p>
          </div>
        </Col>
        <Col  sm={12} lg={4} md={4}>
        <div  className='banner-bottom-box box-3'>
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
      <h2>why choose us</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit inventore sint debitis voluptatem totam natus illum accusantium molestiae quia voluptate assumenda qui accusamus ea, fuga, velit maiores sequi? Illo, ad.</p>
      <Row>
        {wcu.map((content)=>{
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
          <h2>our segments</h2>
          <Row>
            <Col sm={12} md={4} lg={4}>
              <div className='segment'>
                <img src={res} alt="" />
                <div className='se-name'>
                  <h3>Residential</h3>
                </div>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <div className='segment'>
                <img src={commercial} alt="" />
                <div className='se-name'>
                  <h3>Commercial</h3>
                </div>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <div className='segment'>
                <img src={small} alt="" />
                <div className='se-name'>
                  <h3>Small Bussiness</h3>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
    </div>
      <div className='solar-steps'>
        <Container>
          <Row>
            <h2>Get Your Solar in Steps</h2>
            {steps.map((step)=>
              (<Col key={step.title} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
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
      <h2>Customers Review</h2>
      <Container>
        <Row>
          <Col sm={12} lg={4}>
          <div className='review-box'>
              <img src={dummy}  alt="" />
              <div className='review-box-content'>
              <p>Priya Rajan</p>
              <p>Chennai, Tamil Nadu</p>
              <p>Getin Solar made the whole process so smooth! From the initial consultation to installation, they were professional and timely. I’m already seeing a reduction in my electricity bills, and it feels great to contribute to the environment. Highly recommend them to anyone considering solar power!</p>
              </div>
            </div>
          </Col>
          <Col sm={12} lg={4}>
          <div className='review-box'>
              <img src={dummy}  alt="" />
              <div className='review-box-content'>
              <p>Arun Kumar</p>
              <p> Coimbatore, Tamil Nadu</p>
              <p>The team at Getin Solar did an excellent job. They were transparent with the costs and guided me through every step. The installation was quick, and the system has been performing efficiently since day one. A trustworthy choice for solar solutions in Tamil Nadu!</p>
              </div>
            </div>
          </Col>
          <Col sm={12} lg={4}>
          <div className='review-box'>
              <img src={dummy}  alt="" />
              <div className='review-box-content'>
              <p>Lakshmi Narayanan</p>
              <p>Madurai, Tamil Nadu</p>
              <p>I was initially hesitant, but Getin Solar’s team answered all my questions and provided me with a tailored solution for my home. Their customer service is top-notch, and I’m thrilled with the results. Great experience from start to finish!</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <FAQ/>
    
    </>

  )
}

export default Home