import React from 'react';
import { Container } from 'react-bootstrap';
import Calculater from '../../components/Calcultor';
import WhyChooseUs from '../../components/Whychooseus';
import { pageData} from '../../venue';
import './venue.css'
import Review from '../../components/review'
import FAQ from '../../components/Faq';

function DynamicPage({ pageKey }) {
  const data = pageData[pageKey];

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
      <WhyChooseUs title={`Why Choose Us for ${data.title}`} points={data.points} />
      <Review reviews={data.reviews}/>
      <FAQ faqs={data.faqs}/>
    </div>
  );
}

export default DynamicPage;
