import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

export function App() {
  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/posts');
        setFetchedData(response.data);
        console.log('response', response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [setFetchedData]);

  console.log('state', fetchedData);

  return (
    <div className="App">
      <h1>App</h1>
    </div>
  );
}
