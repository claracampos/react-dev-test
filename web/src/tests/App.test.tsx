/* eslint-env jest */

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { App } from '../App';
import testData from './fixtures/testData';
import Post from '../components/Post';
import AppContext from '../context/AppContext';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('renders Post correctly', () => {
  const post = testData[0];

  const testPost = renderer
    .create(
      <AppContext.Provider value={{ setFilter: console.log('setFilter') }}>
        <Post post={post} />
      </AppContext.Provider>
    )
    .toJSON();
  expect(testPost).toMatchSnapshot();
});
