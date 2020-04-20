import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ErrorView from './views/ErrorView';
import LoadingView from './views/LoadingView';
import PostsView from './views/PostsView';

export function App() {
  const [fetchedData, setFetchedData] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/posts');
        setFetchedData(response.data);
        console.log('response', response);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [setFetchedData, setError]);

  console.log('state', fetchedData);

  if (error) {
    return <ErrorView error={error} />;
  }

  if (!fetchedData) {
    return <LoadingView />;
  }

  return <PostsView posts={fetchedData} />;
}
