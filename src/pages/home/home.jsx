import React from 'react'
import './home.css'
import '../../images/banner.jpg'
import { Row,Col,Container} from 'react-bootstrap'
import Calculator from '../../components/Calcultor'
import SavingsIcon from '@mui/icons-material/Savings';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';

function Home() {
  const wcu = [
    {
      title:"Experienced Professionals",
      img:"",
      content:"Our team has years of experience in the solar industry, ensuring that your installation is handled by experts."
    },
    {
      title:"Quality & Durability",
      img:"",
      content:"We use only top-quality materials and equipment to provide you with reliable, long-lasting solar solutions."
    },
    {
      title:"Customized Solutions",
      img:"",
      content:"Every home and business is unique. We tailor our solar solutions to meet your specific energy needs and goals"
    },
    {
      title:"Affordable Financing",
      img:"",
      content:"We offer flexible financing options to make solar accessible and affordable for everyone."
    },
    {
      title:"Comprehensive Support",
      img:"",
      content:"Our dedicated support team is here to assist you before, during, and after installation, ensuring your complete satisfaction."
    },
    {
      title:"Commitment to Sustainability",
      img:"",
      content:"We are dedicated to promoting sustainable energy solutions that protect our planet and future generations."
    },
  ]
  return (
    <>
      <div className='banner'>
      <Container>
      <div className='banner-content'>
        <h1>Power Your Future with Clean, Renewable Energy</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam tenetur minus velit est voluptate nulla dolorem nihil accusamus eaque laborum provident ut modi, animi, quidem veritatis asperiores. Aut, facere rem.</p>
      <button>get a quote</button>
      </div>  
      </Container>
    </div>
    <div className="banner-bottom">
      <Container>
      <Row>
        <Col >
          <div className='banner-bottom-box box-1'>
            <SavingsIcon></SavingsIcon>
            <h2>Save on Energy <br/>Bills</h2>
            <p>Reduce your monthly bills and enjoy long-term savings with our high-efficiency solar systems. Say goodbye to rising electricity costs!</p>
          </div>
        </Col>
        <Col >
        <div  className='banner-bottom-box box-2'>
          <EnergySavingsLeafIcon></EnergySavingsLeafIcon>
            <h2>Reduce Your Carbon Footprint</h2>
            <p>By switching to solar, you’re supporting a cleaner, greener environment. Join us in making a positive impact on the planet with renewable energy.</p>
          </div>
        </Col>
        <Col  >
        <div  className='banner-bottom-box box-3'>
          <BuildCircleIcon></BuildCircleIcon>
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
            <img src="" alt={content.img} />
            <h3>{content.title}</h3>
            <p>{content.content}</p>
            </div>

          </Col>
        })}
      </Row>
      </Container>
     
    </div>
    
    </>

  )
}

export default Home