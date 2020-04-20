import React from 'react';
import ListOfPosts from '../components/ListOfPosts';

const PostsView = (props) => {
  const posts = props.posts;

  return (
    <div>
      <h1>Posts</h1>
      <ListOfPosts posts={posts} />
    </div>
  );
};

export default PostsView;
