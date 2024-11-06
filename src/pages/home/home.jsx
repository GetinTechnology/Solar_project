import React from 'react'
import './home.css'
import '../../images/banner.jpg'
import { Row,Col,Container} from 'react-bootstrap'
import Calcultor from '../../components/calculater/Calcultor'

function Home() {
  return (
    <>
      <div className='banner'>
      <Container>
      <div className='banner-content'>
        <h1>Power Your Future with Clean, Renewable Energy</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam tenetur minus velit est voluptate nulla dolorem nihil accusamus eaque laborum provident ut modi, animi, quidem veritatis asperiores. Aut, facere rem.</p>
      <button>get a quote</button>
      </div>  
      </Container>
    </div>
    <div className="banner-bottom">
      <Container>
      <Row>
        <Col>
          <div className='banner-bottom-box box-1'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus rerum numquam omnis voluptate ipsam porro esse laboriosam, adipisci eaque totam consequatur iste sit ratione qui a perspiciatis non molestiae. Ut?</p>
          </div>
        </Col>
        <Col>
        <div  className='banner-bottom-box box-2'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus rerum numquam omnis voluptate ipsam porro esse laboriosam, adipisci eaque totam consequatur iste sit ratione qui a perspiciatis non molestiae. Ut?</p>
          </div>
        </Col>
        <Col>
        <div  className='banner-bottom-box box-3'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus rerum numquam omnis voluptate ipsam porro esse laboriosam, adipisci eaque totam consequatur iste sit ratione qui a perspiciatis non molestiae. Ut?</p>
          </div>
        </Col>
      </Row>
      </Container>
      
    </div>
    
    </>

  )
}

export default Home