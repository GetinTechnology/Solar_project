import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ReactComponent as Quotes } from '../images/quotes.svg'


function review({ reviews }) {
  return (
    <div className="review">
      <h2>Customers Review</h2>
      <Container>
        <Row className='review-container'>

          {
            reviews.map((review) => (
              <Col lg={4} key={review.name}>
                <div className='review-box'>
                  <div className="review-box-top">
                    <div className='review-box-top-1'>
                      <img src={review.reviewimage} alt="" />
                      <div className='review-box-top-content'>
                        <p>{review.name}</p>
                        <p>{review.Location}</p>
                      </div>
                    </div>
                    <Quotes className="review-box-top-2" />
                  </div>
                  <div className='review-box-content'>
                    <p className='review-box-content-p'>{review.Review}</p>
                  </div>
                </div>
              </Col>
            ))
          }

        </Row>
      </Container>
    </div>
  )
}

export default review