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
  import ScrollToTop from './components/ScrollTop.jsx';

  const App = () => {
    return ( <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero id="home"/>
      <About id="about"/>
      <Projects id="projects"/>
      <Experiences id="experiences"/>
      <Testimonial />
      <Contact id="contact"/>
      <Footer />
      <ScrollToTop />
    </div>
    );
  }

  export default App