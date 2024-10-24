import React, { useState } from "react";

function App() {
  
  const [name, setName] = useState(localStorage.getItem("name"));

 
  const handleChange = (e) => {
    setName(e.target.value);
    localStorage.setItem("name", e.target.value);
  };

  return (
    <div>
      <h1>My Name is {name}!</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
    </div>
  );
}

export default App;
