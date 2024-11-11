import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Contact from './pages/Contact/Contact';
import About from './pages/about/About';
import Carrers from './pages/careers/Carrers';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  
  return (
    <>
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path='Solar_project/' element={<Home />}/>
          <Route path='contact/' element={<Contact />}/>
          <Route path='About/' element={<About />}/>
          <Route path='career/' element={<Carrers />}/>
        </Routes>
          <Footer/>
    </BrowserRouter>

    </>

  );
}

export default App;
