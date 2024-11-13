import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Contact from './pages/Contact/Contact';
import About from './pages/about/About';
import Carrers from './pages/careers/Carrers';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Venue from './pages/Venue/Venue'


function App() {

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
        </Routes>
        <Footer />
      </BrowserRouter>

    </>

  );
}

export default App;
