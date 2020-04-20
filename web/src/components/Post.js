import React, { useState, useContext } from 'react';
import createPostSummary from '../utils/createPostSummary';
import AppContext from '../context/AppContext';
import Markdown from 'markdown-to-jsx';

const Post = (props) => {
  const { title, body, author, publishedAt } = props.post;
  const summary = createPostSummary(body);

  const { setFilter } = useContext(AppContext);
  const [showPost, setShowPost] = useState(false);

  return (
    <div>
      <p onClick={() => setShowPost(!showPost)}>{title}</p>
      <button onClick={() => setFilter({ name: author.name, id: author.id })}>
        {author.name}
      </button>
      <p>{publishedAt}</p>
      <p>summary: {summary}...</p>
      {showPost && <Markdown>{body}</Markdown>}
    </div>
  );
};

export default Post;
