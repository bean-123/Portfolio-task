  import React from 'react'
  import Navbar from './sections/Navbar';
  import Hero from './sections/Hero';
  import About from './sections/About';
  import Card from './components/Card';
  import { FlipWords } from './components/FlipWords';
  import Projects from './sections/Projects.jsx';
  import Experiences from './sections/Experiences.jsx';
  import Testimonial from './sections/Testimonial.jsx';
  import Contact from './sections/Contact.jsx';
  import Footer from './sections/Footer.jsx';

  const App = () => {
    return ( <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
    );
  }

  export default App