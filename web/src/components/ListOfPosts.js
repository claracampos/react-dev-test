import React, { useContext } from 'react';
import Post from './Post';
import AppContext from '../context/AppContext';

const ListOfPosts = () => {
  const { posts } = useContext(AppContext);

  return (
    <div>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default ListOfPosts;
