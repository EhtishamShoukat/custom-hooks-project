import { useEffect, useState, useRef } from "react";

function useWebSocket(url) {
  const [data, setData] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState(null);
  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = new WebSocket(url);

    socketRef.current.onopen = () => {
      setIsConnected(true);
      console.log("WebSocket connection established.");
    };

    socketRef.current.onmessage = (event) => {
      setData(JSON.parse(event.data));
    };

    socketRef.current.onerror = (event) => {
      setError(`WebSocket error: ${event.message}`);
    };

    socketRef.current.onclose = () => {
      setIsConnected(false);
      console.log("WebSocket connection closed.");
    };

    return () => {
      socketRef.current.close();
    };
  }, [url]);

  const sendMessage = (message) => {
    if (socketRef.current && isConnected) {
      socketRef.current.send(JSON.stringify(message));
    } else {
      console.error("WebSocket is not connected.");
    }
  };

  return { data, isConnected, error, sendMessage };
}

export default useWebSocket;
