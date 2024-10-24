import React from 'react';
import "./App.css";
import useDarkMode from './Components/useDarkMode';

function DarkModeToggle() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (

    <div className='container' style={{textAlign:"center",marginTop:"20px"}}>
      <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      <button  className="btn btn-dark" onClick={toggleDarkMode}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
     
    </div>
  );
}

export default DarkModeToggle;
