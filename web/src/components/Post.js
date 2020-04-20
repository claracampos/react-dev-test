import React, { useState } from 'react';
import createPostSummary from '../utils/createPostSummary';

const Post = (props) => {
  const { title, body, author, publishedAt } = props.post;
  const summary = createPostSummary(body);
  const [showPost, setShowPost] = useState();

  return (
    <div>
      <p>{title}</p>
      <p>{author.name}</p>
      <p>{publishedAt}</p>
      <p>summary: {summary}...</p>
      <p>{body}</p>
    </div>
  );
};

export default Post;
