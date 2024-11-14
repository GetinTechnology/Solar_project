import React from 'react'
import './careers.css'
import {Col, Container,Row} from 'react-bootstrap'
import Jobopenings from '../../components/Jobopenings'
import salary from '../../images/salary_7158192.png'
import med from '../../images/medical-report_12772946.png'
import hours from '../../images/working-time_7398232.png'
import holiday from '../../images/holidays_10861897.png'
import sp from '../../images/savings-plan_17774127.png'
import discount from '../../images/promotion_11762553.png'

function Carrers() {
  const benefits =[
    {
      img:salary,
      content:"Competitive Salarie"
    },
    {
      img:med,
      content:"Health & Wellness Programs"
    },
    {
      img:hours,
      content:"Flexible Working Hours & Remote Opportunities"
    },
    {
      img:holiday,
      content:"Paid Time Off & Holidays"
    },
    {
      img:sp,
      content:"Retirement Savings Plan"
    },
    {
      img:discount,
      content:"Employee Discounts on Solar Products"
    },
  ]
  return (
    <div className='career'>
        <div className='career-banner'>
            <h1>Careers</h1>
        </div>
        <Container>
        <div>

<h2>Join Our Team at Getin Solar
</h2>
<h3>Who We Are
</h3>
<p>At Getin Solar, we are on a mission to make sustainable energy accessible to everyone. As leaders in renewable energy, we pride ourselves on delivering clean, cost-effective solar solutions to power homes, businesses, and communities. We believe that a brighter, cleaner future is possible, and it starts with our people.</p>

</div>
<Jobopenings />
<div class="benefits-container">
    <h3>Our Benefits</h3>
    <Row>
    {benefits.map((benefit,index)=>(
      <Col key={index} lg={4}>
        <div className='benefit-box'>
        <img src={benefit.img} alt="" />
        <p>{benefit.content}</p>
        </div>
      </Col>
    ))}
    </Row>
    
</div>
        </Container>

    </div>
  )
}

export default Carrers