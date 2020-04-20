import React, { useState } from 'react';

const Post = (props) => {
  const { title, body, author, publishedAt } = props.post;
  const [showPost, setShowPost] = useState();

  return (
    <div>
      <p>{title}</p>
      <p>{author.name}</p>
      <p>{publishedAt}</p>
      <p>{body}</p>
    </div>
  );
};

export default Post;
