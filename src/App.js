import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route,Link} from 'react-router-dom';
import { useEffect, useState, Suspense, lazy } from 'react';
import Service from './pages/sevices/Service.jsx';
import Loader from './components/Loader.jsx'
// Lazy loading components
const Home = lazy(() => import('./pages/home/Home'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const About = lazy(() => import('./pages/about/About'));
const Carrers = lazy(() => import('./pages/careers/Carrers'));
const Venue = lazy(() => import('./pages/Venue/Venue'));
const LocationPage = lazy(() => import('./pages/locations/LocationPage'));
const Fnf = lazy(() => import('./pages/404.jsx'));
const Policy = lazy(() => import('./pages/terms/Policy.jsx'));
const Disclaimer = lazy(() => import('./pages/terms/Disclaimer.jsx'));
const Privacy = lazy(() => import('./pages/terms/Privacy.jsx'));

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setShowNotification(false);
      const hideTimer = setTimeout(() => {
        setShowNotification(false);
      }, 2 * 60 * 1000);

      const repeatTimer = setInterval(() => {
        setShowNotification(false);
        setTimeout(() => {
          setShowNotification(false);
        }, 2 * 60 * 1000);
      }, 10 * 60 * 1000);

      return () => clearInterval(repeatTimer);
    }, 60 * 1000);

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 20);
    };

    const debounceScroll = debounce(handleScroll, 100);
    window.addEventListener('scroll', debounceScroll);

    return () => {
      window.removeEventListener('scroll', debounceScroll);
    };
  }, []);

  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Carrers />} />
          
          {/* Venue Route */}
          <Route path="venue/">
            <Route path="residential/" element={<Venue pageKey="residential" />} />
            <Route path="smallbusiness/" element={<Venue pageKey="smallBusiness" />} />
            <Route path="commercial/" element={<Venue pageKey="commercial" />} />
          </Route>

          {/* Terms Routes */}
     
            <Route path="termsofpolicy/" element={<Policy />} />
            <Route path="disclaimer" element={<Disclaimer />} />
            <Route path="privacy" element={<Privacy />} />


          {/* Location Routes */}
          <Route path='/location'>
            <Route path='chennai/' element={<LocationPage pagekey={'chennai'}/>}/>
            <Route path='bengaluru/' element={<LocationPage pagekey={'bengaluru'}/>}/>
            <Route path='coimbatore/' element={<LocationPage pagekey={'coimbatore'}/>}/>
            <Route path='madurai/' element={<LocationPage pagekey={'madurai'}/>}/>
            <Route path='virudhunagar/' element={<LocationPage pagekey={'virudhunagar'}/>}/>
            <Route path='thirunelveli/' element={<LocationPage pagekey={'thirunelveli'}/>}/>
            <Route path='kovilpatti/' element={<LocationPage pagekey={'kovilpatti'}/>}/>
            <Route path='kanniyakumari/' element={<LocationPage pagekey={'kanniyakumari'}/>}/>
            </Route>

            {/* service Routes */}
            <Route path='/service'>
              <Route path='Solar_Rooftop_Installation/'  element={<Service pageKey={'Solar_Rooftop_Installation'}/>}/>
              <Route path='Solar_On_Grid_Rooftop/'  element={<Service pageKey={'Solar_On_Grid_Rooftop'}/>}/>
              <Route path='Solar_Off_Grid_Rooftop/'  element={<Service pageKey={'Solar_Off_Grid_Rooftop'}/>}/>
              <Route path='Solar_Water_Heaters/'  element={<Service pageKey={'Solar_Water_Heaters'}/>}/>
              <Route path='Solar_Water_Pumps/'  element={<Service pageKey={'Solar_Water_Pumps'}/>}/>
              <Route path='Solar_Rain_Water_Harvesting/'  element={<Service pageKey={'Solar_Rain_Water_Harvesting'}/>}/>
              <Route path='Solar_EV_Charging_Station/'  element={<Service pageKey={'Solar_EV_Charging_Station'}/>}/>
              <Route path='Solar_Cleaning_AMC/'  element={<Service pageKey={'Solar_Cleaning_AMC'}/>}/>
              <Route path='Solar_Street_Lights/'  element={<Service pageKey={'Solar_Street_Lights'}/>}/>
              <Route path='Industry_Water_Treatment/'  element={<Service pageKey={'Industry_Water_Treatment'}/>}/>
              <Route path='Solar_Ground_Mounted/'  element={<Service pageKey={'Solar_Ground_Mounted'}/>}/>
              <Route path='Commercial_Solar_Systems/'  element={<Service pageKey={'Commercial_Solar_Systems'}/>}/>
              <Route path='Power_Trading/'  element={<Service pageKey={'Power_Trading'}/>}/>
              <Route path='CT_PT_Distribution_Boxes/'  element={<Service pageKey={'CT_PT_Distribution_Boxes'}/>}/>
            </Route>

          {/* Fallback Route */}
          <Route path="*" element={<Fnf />} />
       
        </Routes>
      </Suspense>

      <button
        className={isVisible ? 'mybutton show' : 'mybutton'}
        onClick={scrollToTop}
      >
        ^
      </button>

      <div className="chat-box">
        <Link to='https://api.whatsapp.com/send?phone=918925831826&text=Hi! Getin Solar' >
        <img src={require('./images/chat-bubble_11302438.png')} alt="chat-box" />
        </Link>
      
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
