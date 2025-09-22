import About from './components/About';
import BackgroundPattern from './components/BackgroundPattern';
import Carousel from './components/Carousel';
import Contact from './components/Contact';
import Header from './components/Header';
import Hero from './components/Hero';
import TrailerSection from './components/TrailerSection';

function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundPattern />
      <Header />
      <Hero />
      <TrailerSection />
      <Carousel />
      <About />
      <Contact />
    </div>
  );
}

export default App;