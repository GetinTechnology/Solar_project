import { useEffect,useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { pageData } from '../../location'
import './location.css'
import eb from '../../images/bill-check-svgrepo-com.svg'
import invesment from '../../images/location-in.svg'
import subsidy from '../../images/allowance-svgrepo-com.svg'
import maintenance from '../../images/location-maintenence.svg';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import SavingsIcon from '@mui/icons-material/Savings';
import SecurityIcon from '@mui/icons-material/Security';
import HomeIcon from '@mui/icons-material/Home';
import WhyChooseUs from '../../components/Whychooseus';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ConstructionIcon from '@mui/icons-material/Construction';
import BoltIcon from '@mui/icons-material/Bolt';
import Review from '../../components/review';
import FAQ from '../../components/Faq';
import { Link } from 'react-router-dom';

function LocationPage({ pagekey }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pagekey]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    city: '',
    solarFor: '',
    electricityBill: '',
    financeInterest: '',
});

  const data = pageData[pagekey];
  if (!data) return null;
  

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
};
const points= [
  { icon: <HomeRepairServiceIcon />, title: "Lower Your Bills", description: "Reduce monthly costs by switching to efficient solar energy." },
  { icon: <SavingsIcon />, title: "Eco-Friendly", description: "Support a cleaner planet by reducing carbon footprint." },
  { icon: <HomeIcon />, title: "Increased Home Value", description: "Homes with solar panels have higher resale value." },
  { icon: <SecurityIcon />, title: "Reliable Energy", description: "Enjoy stable power with minimal maintenance." },
]
const steps = [
  { title: "Book a Free Consultation", description: "Schedule a consultation with our solar experts...", icon: <EventAvailableIcon /> },
  { title: "Review Proposal & Confirm Order", description: "Receive a detailed proposal tailored to your site...", icon: <AssignmentIcon /> },
  { title: "Track Project Installation", description: "Keep tabs on each stage of the installation process...", icon: <ConstructionIcon /> },
  { title: "Your Site is Solar Powered", description: "Celebrate as your property begins harnessing the sun...", icon: <BoltIcon /> },
];
  return (
    <div className='location'>
      <div className='location-banner'>
        <Container>
          <Row>
            <Col>
              <div>
                <h2>Embrace Solar Power in {data.title} A Smarter Way to Save on Energy</h2>
                <div className='location-content'>
                  <img src={eb} alt="" height={50} />
                  <span>Slash Your Electricity Bills</span>
                </div>
                <div className='location-content'>
                  <img src={invesment} alt="" height={50} />
                  <span>Maximize Your Investment</span>
                </div>
                <div className='location-content'>
                  <img src={subsidy} alt="" height={50} />
                  <span>Leverage Government Subsidies</span>
                </div>
                <div className='location-content'>
                  <img src={maintenance} alt="" height={50} />
                  <span>Worry-Free Maintenance</span>
                </div>
              </div>
            </Col>
            <Col>
              <div className='location-form'>
                <form action="" className='qu' onSubmit={handleSubmit}>
                  <label htmlFor="">Name</label>
                  <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleInputChange} required />
                  <label htmlFor="">Email</label>
                  <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleInputChange} required />
                  <label htmlFor="">phone</label>
                  <input type="tel" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleInputChange} required />
      
                  <label htmlFor="">Solar For</label>
                  <select name="solarFor" value={formData.solarFor} onChange={handleInputChange} required>
                    <option value="">Select an Option</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Small Business">Small Business</option>
                  </select>
                  <label>Monthly Electricity Bill</label>
                  <select name="electricityBill" value={formData.electricityBill} onChange={handleInputChange} required>
                    <option value="">Select Range</option>
                    <option value="Below ₹2000">Below ₹2000</option>
                    <option value="₹2000 - ₹5000">₹2000 - ₹5000</option>
                    <option value="₹5000 - ₹10000">₹5000 - ₹10000</option>
                    <option value="Above ₹10000">Above ₹10000</option>
                  </select>
                  <label>Interest in Financing</label>
                  <select name="financeInterest" value={formData.financeInterest} onChange={handleInputChange} required>
                    <option value="">Select Option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Maybe">Maybe</option>
                  </select>
                  <button className='quote' style={{ width: '100px', margin: '10px 0 0 0', display: 'flex', justifyContent: 'center' }}>submit</button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
      <WhyChooseUs title={`Why Choose Us for ${data.title}`} points={points} />
      </div>
      <div className='location-cont'>
        <Container>
        <h2>Affordable Solar Panel Installation in {data.title}: Save More, Live Sustainably</h2>
        <p>Transitioning to solar energy in {data.title} has never been more accessible or advantageous. With rising electricity costs and a growing need for renewable energy, solar panels offer a practical and eco-friendly solution for households and businesses in the region.</p>
        <div>
          <h3>Top Reasons to Choose Solar Panels in {data.title}</h3>
          <ol>
            <li className="list-conteent"><b>Slash Your Electricity Costs:</b> Solar energy enables you to produce your own power, significantly lowering your monthly electricity expenses. Enjoy savings of up to 90% on your bills.</li>
            <li className="list-conteent"><b>Government Subsidy Benefits:</b> Take advantage of government solar subsidy programs to make installation more affordable. Subsidies of up to ₹78,000 under the PM Kusum Yojana are available to reduce your upfront investment.</li>
            <li className="list-conteent"><b>Achieve Energy Independence:</b> Solar panels empower you to reduce reliance on conventional electricity sources, giving you greater control over your energy usage.</li>
            <li className="list-conteent"><b>Environmentally Friendly Solution:</b> Solar energy is clean, green, and renewable. By going solar, you contribute to reducing carbon emissions and promoting a sustainable environment.</li>
            <li className="list-conteent"><b>Low Maintenance, High Durability:</b> Modern solar panels require minimal upkeep and have a lifespan of up to 25 years, making them a hassle-free investment.</li>
          </ol>
        </div>
        <div>
          <h3>Steps to Apply for a Solar Subsidy in {data.title}
          </h3>
          <p>Follow these simple steps to avail government solar subsidies:</p>
          <ol>
            <li className="list-conteent">Visit the official solar subsidy portal at <Link to='https://www.pmsuryaghar.gov.in/'>PM Suryaghar.</Link> </li>
            <li className="list-conteent">Register by providing details like your name, Aadhar number, address, and contact information.</li>
            <li className="list-conteent">Upload the necessary documents, including ID proof and residential details.</li>
            <li className="list-conteent">Submit your application and save your registration ID for future reference.</li>
          </ol>
        </div>
        <div>
          <h3>Advantages of Installing Solar Panels in {data.title}</h3>
          <ul>
          <li className="list-conteent"><b>Significant Energy Savings: </b> Drastically cut your electricity costs with free solar energy.</li>
            <li className="list-conteent"><b>Boosted Property Value: </b> Homes with installed solar panels attract more buyers and offer higher resale value.</li>
            <li className="list-conteent"><b>Eco-Friendly Living:</b> Reduce your carbon footprint and support a greener environment.</li>
            <li className="list-conteent"><b>Smart Long-Term Investment:</b> Solar systems provide reliable returns, with a payback period of 5-8 years and free electricity thereafter.</li>
          </ul>
        </div>
        <div>
          <h3>Understanding Solar Installation Costs in {data.title}</h3>
          <p>The total cost of installing a solar power system includes solar panels, an inverter, a mounting structure, wiring, and installation charges. Costs vary depending on the system's size and type but are now more accessible thanks to government incentives and financing options.</p>
        </div>
  
        </Container>
        
      </div>
      <div className='solar-steps' style={{marginTop:'4rem'}}>
        <Container>
          <Row>
            <h2>Get Your Solar in Steps</h2>
            {steps.map((step) =>
            (<Col key={step.title} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div className='step-box'>
                <div>{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </Col>)
            )}
          </Row>
        </Container>
      </div>
      <div>
          <Review reviews={data.reviews}/>
      </div>
      <div>
      <FAQ faqs={data.faqs}/>
      </div>
    </div>
  )

}

export default LocationPage