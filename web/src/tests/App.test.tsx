/* eslint-env jest */

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import { App } from '../App';
import testData from './fixtures/testData';
import Post from '../components/Post';
import AppContext from '../context/AppContext';
import ListOfPosts from '../components/ListOfPosts';

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

test('renders ListOfPosts correctly', () => {
  const testList = renderer
    .create(
      <AppContext.Provider value={{ fetchedData: testData, filter: false }}>
        <ListOfPosts />
      </AppContext.Provider>
    )
    .toJSON();
  expect(testList).toMatchSnapshot();
});
