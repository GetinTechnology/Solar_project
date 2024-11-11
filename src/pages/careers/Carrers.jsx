import React from 'react'
import './careers.css'
import {Container} from 'react-bootstrap'
import Jobopenings from '../../components/Jobopenings'

function Carrers() {
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
<h3>Our Benefits</h3>
<ul>
    <li>Competitive Salaries
    </li>
    <li>Health & Wellness Programs
    </li>
    <li>Flexible Working Hours & Remote Opportunities
    </li>
    <li>Paid Time Off & Holidays
    </li>
    <li>Retirement Savings Plan
    </li>
    <li>Employee Discounts on Solar Products
    </li>
    <li>Learning and Development Programs
    </li>
</ul>
</div>
<Jobopenings />
        </Container>

    </div>
  )
}

export default Carrers