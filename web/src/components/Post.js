import React, { useState } from 'react';
import createPostSummary from '../utils/createPostSummary';

const Post = (props) => {
  const { title, body, author, publishedAt } = props.post;
  const summary = createPostSummary(body);
  const [showPost, setShowPost] = useState(false);

  return (
    <div>
      <p onClick={() => setShowPost(!showPost)}>{title}</p>
      <p>{author.name}</p>
      <p>{publishedAt}</p>
      <p>summary: {summary}...</p>
      {showPost && <p>{body}</p>}
    </div>
  );
};

export default Post;
