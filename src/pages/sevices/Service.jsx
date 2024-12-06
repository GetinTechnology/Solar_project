import React, { useEffect, useState } from 'react'
import './service.css'
import { Container, Row, Col } from 'react-bootstrap'
import { pageData } from './service';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';


function Service({ pageKey }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageKey]);
  const [openItems, setOpenItems] = useState({});

  // Toggle functionality for individual items
  const toggleService = (key) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
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
            {/* Content 1 */}
            <Row>
              <Col className="service-img" lg={6} md={12}>
                <img src={data.content1?.img || "default.jpg"} alt="Content 1" />
              </Col>
              <Col lg={6} md={12}>
                <div className="service-contents">
                  <h2>{data.content1?.contenthead || "Heading Unavailable"}</h2>
                  {data.content1?.contentpara?.map((content, index) => (
                    <div
                      key={content.contenttitle || `content1-${index}`}
                      className={`service-item ${openItems[`content1-${index}`] ? "open" : ""}`}
                      onClick={() => toggleService(`content1-${index}`)}
                    >
                      <p className="service-item-title">
                        <ArrowRightAltOutlinedIcon className="arrow-icon" />
                        {content.contenttitle}
                      </p>
                      <div className="service-item-content">
                        {typeof content.content === "string" ? (
                          <p>{content.content}</p>
                        ) : (
                          content.content // Render JSX if the content is an element
                        )}
                      </div>
                    </div>
                  )) || <p>No content available.</p>}
                </div>
              </Col>
            </Row>

            {/* Content 2 */}
            <Row>
              <Col lg={6} md={12}>
                <div className="service-contents">
                  <h2>{data.content2?.contenthead || "Heading Unavailable"}</h2>
                  {data.content2?.contentpara?.map((content, index) => (
                    <div
                      key={content.contenttitle || `content2-${index}`}
                      className={`service-item ${openItems[`content2-${index}`] ? "open" : ""}`}
                      onClick={() => toggleService(`content2-${index}`)}
                    >
                      <p className="service-item-title">
                        <ArrowRightAltOutlinedIcon className="arrow-icon" />
                        {content.contenttitle}
                      </p>
                      <div className="service-item-content">
                        {typeof content.content === "string" ? (
                          <p>{content.content}</p>
                        ) : (
                          content.content 
                        )}
                      </div>
                    </div>
                  )) || <p>No content available.</p>}
                </div>
              </Col>
              <Col className="service-img" lg={6} md={12}>
                <img src={data.content2?.img || "default.jpg"} alt="Content 2" />
              </Col>
            </Row>
          </Container>
        </div>
        {data.types &&
          <div className='service-types'>
            {data.types}
          </div>}

      </div>

          <div >
            <h2 className='headings'>our projects</h2>
            <div className='slide'>
              <div className='slide-images'>
              {data.slides?.map((img,index)=>(
              <img src={img} alt={data.title} key={index}/>
            ))}
              </div>
              <div className='slide-images'>
              {data.slides?.map((img,index)=>(
              <img src={img} alt={data.title} key={index}/>
            ))}
              </div>
            </div>
   
          </div>
    </div>
  );
}

export default Service;