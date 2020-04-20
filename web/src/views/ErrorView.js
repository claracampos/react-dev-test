import React from 'react';

const ErrorView = (props) => {
  console.log(props.error);

  return (
    <div>
      <h1>Error</h1>
      <p>Oh no! Something went wrong.</p>
    </div>
  );
};

export default ErrorView;
