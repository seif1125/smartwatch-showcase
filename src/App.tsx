import React from 'react';
import NanBar from './components/NavBar.tsx'
import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import Design from './Design.tsx';



function App() {
  return (
    <div className="App">
  
     <Hero/>
     <Features/>
     <Design/>
     {/* <NanBar/>  */}

    </div>
  );
}

export default App;
