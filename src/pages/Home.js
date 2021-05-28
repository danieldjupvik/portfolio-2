import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import Overlay from '../components/Overlay';
import Projects from '../components/Projects';
import { useState } from 'react';

const Home = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  setTimeout(() => {
    setShowOverlay(false);
  }, 900);
  return (
    <>
      {showOverlay ? (
        <Overlay />
      ) : (
        <>
          <Navigation />
          <Hero />
          <Projects />
        </>
      )}
    </>
  );
};

export default Home;
