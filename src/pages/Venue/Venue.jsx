import React,{useState,useEffect} from 'react';
import { Container,Row,Button  } from 'react-bootstrap';
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
        <div className={`content-container ${showAll ? 'expanded' : ''}`}>
        {data.content.map((content, index) => (
        (index === 0 || showAll) && (
          <Row key={index} className="content-item">
            <h3>{content.title}</h3>
            <p>{content.content}</p>
          </Row>
        )
      ))} 
        </div>
        <Button variant="link" onClick={toggleShowAll} className={showAll ? 'view-less-btn' : 'view-more-btn'}>
      {showAll ? 'View Less' : 'View More'}
      <span className={`arrow-icon ${showAll ? 'rotate-up' : 'rotate-down'}`}>
        {showAll ? <FaChevronUp /> : <FaChevronDown />}
      </span>
    </Button>
      </Container>
      <div style={{ marginTop: '4rem' }}>
        <Calculater />
      </div>
      <WhyChooseUs title={`Why Choose Us for ${data.title}`} points={data.points} />
      <Review reviews={data.reviews}/>
      <FAQ faqs={data.faqs}/>
    </div>
  );
}

export default DynamicPage;
