import React,{useState,useEffect} from 'react';
import { Container,Row,Button,Col  } from 'react-bootstrap';
import Calculater from '../../components/Calcultor';
import WhyChooseUs from '../../components/Whychooseus';
import { pageData} from '../../venue';
import './venue.css'
import Review from '../../components/review'
import FAQ from '../../components/Faq';
import '../home/home.css'
import Services from '../../components/Services';

function DynamicPage({ pageKey }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageKey]);
  const data = pageData[pageKey];
  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.blur-content');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight - 100) {
          element.classList.add('content-visible');
        } else {
          element.classList.remove('content-visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!data) return null;

  return (
    <div className="dynamic-page">
  <div 
  className="res-banner" 
  style={{
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.568), rgba(0, 0, 0, 0.568)), 
                 url(${data.bannerBackground})`,
    backgroundSize: "cover", // Optional: ensures the image covers the div
    backgroundPosition: "center" // Optional: positions the image in the center
  }}
>
        <h1>{data.title}</h1>
        <p>{data.paragraph}</p>
      </div>

      <div style={{ marginTop: '4rem' }} className='blur-content'>
        <Calculater />
      </div>
      <div className='venue-content blur-content'>
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
          <Col className='venue-content-col-2'>
            <div className="venue-content-image">
              <img src={data.title1.img} alt={data.title1.title} />
            </div>
          </Col>
        </Row>
        <Row className="venue-row-content">
          <span>2</span>

          <Col className='venue-content-col-2'>
            <div className="venue-content-image">
              <img src={data.title2.img} alt={data.title2.title} />
            </div>
          </Col>
          <Col className='venue-content-col-1'>
          <div className='venue-content-box'>
              <h4>{data.title2.title}</h4>
              <p>{data.title2.content}</p>
            </div>
          </Col>
        </Row>
        <Row className="venue-row-content">
          <span>3</span>
          <Col className='venue-content-col-1'>
          <div className='venue-content-box'>
              <h4>{data.title3.title}</h4>
              <p>{data.title3.content}</p>
            </div>
          </Col>
          <Col className='venue-content-col-2'>
            <div className="venue-content-image">
              <img src={data.title3.img} alt={data.title3.title} />
            </div>
          </Col>
        </Row>
        <Row className="venue-row-content">
          <span>4</span>

          <Col className='venue-content-col-2'>
            <div className="venue-content-image">
              <img src={data.title4.img} alt={data.title4.title} />
            </div>
          </Col>
          <Col className='venue-content-col-1'>
          <div className='venue-content-box'>
              <h4>{data.title4.title}</h4>
              <p>{data.title4.content}</p>
            </div>
          </Col>
        </Row>
        <Row className="venue-row-content">
          <span>5</span>
          <Col className='venue-content-col-1'>
          <div className='venue-content-box'>
              <h4>{data.title5.title}</h4>
              <p>{data.title5.content}</p>
            </div>
          </Col>
          <Col className='venue-content-col-2'>
            <div className="venue-content-image">
              <img src={data.title5.img} alt={data.title5.title} />
            </div>
          </Col>
        </Row>
        </Container>
      </div>
      <div className='blur-content'>
      <WhyChooseUs title={`Why Choose Us for ${data.title}`} points={data.points} />

      </div>
      <div className='blur-content'>
      <Services Services={data.services} head={data.title}/>
      </div>
      <div className='blur-content'>
      <Review reviews={data.reviews}/>

      </div>
      <div className='blur-content'>
      <FAQ faqs={data.faqs}/>

      </div>
    </div>
  );
}

export default DynamicPage;