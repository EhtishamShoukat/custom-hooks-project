import React from 'react';
import useKeyPress from './Components/useKeyPress';

const KeyPressComponent = () => {
  const aKeyPress = useKeyPress('a');
  const bKeyPress = useKeyPress('b');

  return (
    <div className='container' style={{marginTop:"20px",textAlign:"center"}}>
      <h1 style={{fontSize:"100px"}}>Press 'a' or 'b' key</h1>
      {aKeyPress && <p  style={{fontSize:"50px"}}>'a' is pressed!</p>}
      {bKeyPress && <p  style={{fontSize:"50px"}}>'b' is pressed!</p>}
    </div>
  );
};

export default KeyPressComponent;
