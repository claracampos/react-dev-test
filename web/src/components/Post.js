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
    <div className="border p-2">
      <p className="font-italic text-secondary p-0 m-0">
        {publishedAt.slice(0, 10)}
      </p>
      <p onClick={() => setShowPost(!showPost)} className="display-4 cursor">
        {title}
      </p>
      <button
        onClick={() => setFilter({ name: author.name, id: author.id })}
        className="btn btn-outline-dark btn-sm mb-2"
      >
        by {author.name}
      </button>
      {!showPost ? (
        <p>Summary: {summary}...</p>
      ) : (
        <div>
          <Markdown>{body}</Markdown>
          <button
            onClick={() => setShowPost(false)}
            className="btn btn-outline-dark btn-sm mb-2"
          >
            Show less
          </button>
        </div>
      )}
    </div>
  );
};

export default Post;
