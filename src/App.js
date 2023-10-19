import './App.css';
import Home from './components/Home';
import About from './components/About'
import Navbar from './components/Navbar';
import Services from './components/Services';
import Features from './components/Features';
import Cta from './components/Cta';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <main id='main'>
      <About />
      <Services />
      <Features />
      <Cta />
      <Faq />
      <Team />
      <Contact />
    </main>
    <Footer />

    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
    </>
  );
}

export default App;
