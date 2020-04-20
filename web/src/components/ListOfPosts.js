import React, { useContext } from 'react';
import Post from './Post';
import AppContext from '../context/AppContext';
import sortByDate from '../utils/sortByDate';
import filterByAuthor from '../utils/filterByAuthor';

const ListOfPosts = () => {
  const { fetchedData, filter } = useContext(AppContext);

  const posts = filter
    ? sortByDate(filterByAuthor(fetchedData, filter.id))
    : sortByDate(fetchedData);

  return (
    <div>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default ListOfPosts;
