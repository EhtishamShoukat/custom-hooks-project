
import React, { useState, useEffect } from 'react';

import image1 from './assets/images/4k-image1.jpg';
import image2 from './assets/images/4k-image2.jpg';


function useMediaQuery(query) {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event) => setMatches(event.matches);
    
    mediaQueryList.addListener(listener); 
    return () => mediaQueryList.removeListener(listener); 
  }, [query]);

  return matches;
}

function App() {
  
  const isMobile = useMediaQuery('(max-width: 768px)');

  
  const [currentImage, setCurrentImage] = useState(1);

  
  const toggleImage = () => {
    setCurrentImage(currentImage === 1 ? 2 : 1);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{isMobile ? 'Mobile View' : 'Desktop View'}</h1>
        <img 
        src={currentImage === 1 ? image1 : image2} 
        alt="4K View" 
        style={{ width: '100%', maxWidth: '1024px', height: 'auto' }} 
      />
      <br />
      <button onClick={toggleImage} style={{ marginTop: '20px',backgroundColor:"red",padding:"10px",color:"white",border:"none",borderRadius:"50px" }}>
        {currentImage === 1 ? 'Show Second Image' : 'Show First Image'}
      </button>
    </div>
  );
}

export default App;
