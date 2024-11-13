import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

function review({reviews}) {
  return (
    <div className="review">
      <h2>Customers Review</h2>
      <Container>
        <Row>
        {reviews.map((review)=>(
             <Col sm={12} lg={4}>
             <div className='review-box'>
                 <img src={review.reviewimage}  alt="" />
                 <div className='review-box-content'>
                 <p>{review.name}</p>
                 <p>{review.Location}</p>
                 <p>{review.Review}</p>
                 </div>
               </div>
             </Col>
        ))}
         </Row>
      </Container>
    </div>
  )
}

export default review