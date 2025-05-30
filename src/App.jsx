import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Tech from './components/Tech';
import Works from './components/Works';
import StarsCanvas from './components/canvas/Stars';

const App = () => {
  return (
    <BrowserRouter>
    <div className='relative z-0 bg-primary '>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <div className='relative z-0'>
        <Contact/>
        <StarsCanvas />
      </div>
    </div>
    </BrowserRouter>
  );
};

export default App;