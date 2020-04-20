import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';

export function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get('http://localhost:4000/posts');
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  });

  return (
    <div className="App">
      <h1>App</h1>
    </div>
  );
}
