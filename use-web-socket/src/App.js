import React, { useState } from 'react';
import useWebSocket from './Components/useWebSocket';

function WebSocketComponent() {
  const { data, isConnected, error, sendMessage } = useWebSocket('ws://your-websocket-url');

  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    sendMessage({ message: inputMessage });
    setInputMessage(''); 
  };

  return (
    <div className='Container' style={{textAlign:"center",marginTop:"20px"}}>
      <h2>WebSocket Connection</h2>
      {isConnected ? <p>Status: Connected</p> : <p>Status: Disconnected</p>}
      {error && <p>Error: {error}</p>}
      <div>
        <h3>Received Data:</h3>
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>No data received yet.</p>}
      </div>
      <div>
        <input 
          type="text" 
          value={inputMessage} 
          onChange={(e) => setInputMessage(e.target.value)} 
          placeholder="Type your message"
          style={{padding: "3px 0px 7px 1px"}}
        />
        <button className='btn btn-danger mx-2' onClick={handleSendMessage}>Send Message</button>
      </div>
    </div>
  );
}

export default WebSocketComponent;
