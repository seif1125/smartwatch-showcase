import React from 'react';
import Header from './components/header/Header.tsx'
import Hero from './components/hero/Hero.tsx'
import Features from './components/features/Features.tsx';
import Design from './components/design/Design.tsx';
import Gallery from './components/gallery/Gallery.tsx';
import Branches from './components/branches/branches.tsx';
import Footer from './components/footers/Footer.tsx';



function App() {
  return (
    <div className="App">
     <Header />
     <Hero/>
     <Features/>
     <Design/>
     <Gallery/>
     <Branches />
     <Footer/>
    

    </div>
  );
}

export default App;
