import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import ErrorView from './views/ErrorView';
import LoadingView from './views/LoadingView';
import PostsView from './views/PostsView';
import AppContext from './context/AppContext';

export function App() {
  const [fetchedData, setFetchedData] = useState(false);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/posts');
        setFetchedData(response.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [setFetchedData, setError]);

  if (error) {
    return <ErrorView error={error} />;
  }

  if (!fetchedData) {
    return <LoadingView />;
  }

  return (
    <AppContext.Provider value={{ filter, setFilter, fetchedData }}>
      <PostsView />
    </AppContext.Provider>
  );
}
