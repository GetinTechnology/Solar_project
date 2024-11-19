import React,{useState,useEffect} from 'react';
import { Container,Row,Button,Col  } from 'react-bootstrap';
import Calculater from '../../components/Calcultor';
import WhyChooseUs from '../../components/Whychooseus';
import { pageData} from '../../venue';
import './venue.css'
import Review from '../../components/review'
import FAQ from '../../components/Faq';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function DynamicPage({ pageKey }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageKey]);
  const data = pageData[pageKey];
  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  if (!data) return null;

  return (
    <div className="dynamic-page">
      <div className="res-banner"  style={{
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.492), rgba(0, 0, 0, 0.492)), url(${data.bannerBackground})`,

  }}>
        <h1>{data.title}</h1>
      </div>
      <Container>
        <h4>{data.description}</h4>
        <p>{data.paragraph}</p>
        
      </Container>
      <div style={{ marginTop: '4rem' }}>
        <Calculater />
      </div>
      <div className='venue-content'>
        <h2>Harnessing the Power of the Sun: Residential Solar Energy Explained</h2>
        <Container>
        <Row className="venue-row-content">
          <span>1</span>
          <Col className='venue-content-col-1'>
          <div className='venue-content-box'>
              <h4>{data.title1.title}</h4>
              <p>{data.title1.content}</p>
            </div>
          </Col>
          <Col>
            <div className="venue-content-image">
              <img src="" alt={data.title1.img} />
            </div>
          </Col>
        </Row>
 

        </Container>
      </div>

      <WhyChooseUs title={`Why Choose Us for ${data.title}`} points={data.points} />
      <Review reviews={data.reviews}/>
      <FAQ faqs={data.faqs}/>
    </div>
  );
}

export default DynamicPage;
