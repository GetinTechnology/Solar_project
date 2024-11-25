import React from 'react'
import './service.css'
import {Container,Row,Col} from 'react-bootstrap'
import { pageData } from './service';

function Service({ pageKey }) {
    const data = pageData[pageKey];
  
    if (!data) {
      return (
        <div className="service">
          <h1>Service Data Not Found</h1>
          <p>Please ensure the page key is correct and data is available.</p>
        </div>
      );
    }
  
    return (
      <div className="service">
        <div className="service-hero">
          <h1>Our Services</h1>
        </div>
        <div className="service-content">
          <h1 className="service-head">{data.title || "Title Unavailable"}</h1>
          <p>{data.para || "Description not available."}</p>
          <div className="service-content-box">
            <Container>
              <Row>
                <Col className="service-img">
                  <img src={data.content1?.img || "default.jpg"} alt="" />
                </Col>
                <Col>
                  <div className="service-contents">
                    <h2>{data.content1?.contenthead || "Heading Unavailable"}</h2>
                    {data.content1?.contentpara?.map((content, index) => (
                      <p key={index}>{content}</p>
                    )) || <p>No content available.</p>}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="service-contents">
                    <h2>{data.content2?.contenthead || "Heading Unavailable"}</h2>
                    {data.content2?.contentpara?.map((content, index) => (
                      <p key={index}>{content}</p>
                    )) || <p>No content available.</p>}
                  </div>
                </Col>
                <Col className="service-img">
                  <img src={data.content2?.img || "default.jpg"} alt="" />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
  
  export default Service;