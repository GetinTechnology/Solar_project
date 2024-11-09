import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Contact from './pages/Contact/Contact';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  
  return (
    <>
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='contact/' element={<Contact />}/>
        </Routes>
          <Footer/>
    </BrowserRouter>

    </>

  );
}

export default App;
