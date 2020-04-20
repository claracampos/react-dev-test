import React from 'react';
import Post from './Post';

const ListOfPosts = (props) => {
  const posts = props.posts;

  return (
    <div>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default ListOfPosts;
