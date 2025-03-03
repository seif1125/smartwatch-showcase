import React from 'react';
import NanBar from './components/NavBar.tsx'
import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import Design from './Design.tsx';
import Gallery from './Gallery.tsx';



function App() {
  return (
    <div className="App">
  
     <Hero/>
     <Features/>
     <Design/>
     <Gallery/>
     {/* <NanBar/>  */}

    </div>
  );
}

export default App;
