import './App.css';
import Final from './components/footer/Final';
import ProjectPages from './components/projects/projectPages';
import { Route, Routes } from 'react-router-dom';
import HappyClients from './components/Happy-Clients/HappyClients';
import HeroFirst from './components/Hero-I/HeroFirst';
import HeroSecond from './components/Hero-II/HeroSecond';
import HeroThird from './components/Hero-III/HeroThird';
import HeroFourth from './components/Hero-IV/HeroFourth';
import Navbar from './components/navbar/Navbar';
import Testimonials from './components/testimonials';
import Contact from './components/contact/contact.js';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroFirst />
            <HeroSecond />
            <div className='relative w-full'>
              <img 
                src='/assets/Group 1.svg'
                className='absolute -left-2 top-[145px] w-[230px]'
              />
              <img 
                src='/assets/EllipseLeftSecond.svg'
                className='absolute -left-2  w-[180px]'
              />
            </div>
            <HeroThird />
            <HeroFourth />
            <HappyClients />
            <Final />
          </>
        } />
        <Route path="/projects" element={<ProjectPages />} />
        
  {/* other routes */}
  <Route path="/testimonials" element={<Testimonials />} />
   <Route path="/contact" element={<Contact />} />
      </Routes>
      

    </div>
  );
}

export default App;
