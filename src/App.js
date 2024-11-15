import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Contact from './pages/Contact/Contact';
import About from './pages/about/About';
import Carrers from './pages/careers/Carrers';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Venue from './pages/Venue/Venue'
import Fnf from './pages/404.jsx';
import LocationPage from './pages/locations/LocationPage';
import { useEffect, useState } from 'react';
import chat from './images/chat-bubble_11302438.png'
import not from './images/notification.wav'


function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling animation
    });
  };
  useEffect(() => {
    // Show span 1 minute after render
    const initialTimer = setTimeout(() => {
      setShowNotification(true);
      
      // Hide span after 2 minutes
      const hideTimer = setTimeout(() => {
        setShowNotification(false);
      }, 2 * 60 * 1000); // 2 minutes in milliseconds

      // Re-show every 10 minutes after the span hides
      const repeatTimer = setInterval(() => {
        setShowNotification(true);
        
        // Hide span after 2 minutes in each cycle
        setTimeout(() => {
          setShowNotification(false);
        }, 2 * 60 * 1000);

      }, 10 * 60 * 1000); // 10 minutes in milliseconds

      return () => clearInterval(repeatTimer);

    }, 60 * 1000); // 1 minute in milliseconds

    // Cleanup timers on unmount
    return () => {
      clearTimeout(initialTimer);
    };
  }, []);

  useEffect(() => {
    setShowNotification(false);
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const debounceScroll = debounce(handleScroll, 100); // Debounce with 100ms delay
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
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='Solar_project/' element={<Home />} />
          <Route path='contact/' element={<Contact />} />
          <Route path='About/' element={<About />} />
          <Route path='career/' element={<Carrers />} />
          <Route path="venue/">
            <Route path="residential/" element={<Venue pageKey="residential" />} />
            <Route path="smallbusiness/" element={<Venue pageKey="smallBusiness" />} />
            <Route path="commercial/" element={<Venue pageKey="commercial" />} />
          </Route>
          <Route path='location/'>
            <Route path='chennai/' element={<LocationPage pagekey={'chennai'}/>}/>
          </Route>
          <Route path='*' element={<Fnf/>}/>
        </Routes>
        <button
        className={isVisible?'mybutton show':'mybutton'}
        onClick={scrollToTop}
       >
          ^
      </button>
        <div className='chat-box'>
        <img src={chat} alt='chat-box' />
        {showNotification &&     <span>1</span>}
        {showNotification && <audio key={Date.now()} src={not} autoPlay />}
        </div>
       
        <Footer />
      </BrowserRouter>

    </>

  );
}

export default App;
