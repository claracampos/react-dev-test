import React from 'react';
import renderer from 'react-test-renderer';
import testData from './fixtures/testData';
import { contextWithoutFilter } from './fixtures/testContext';
import Post from '../components/Post';
import AppContext from '../context/AppContext';

test('renders Post correctly', () => {
  const post = testData[0];

  const testPost = renderer
    .create(
      <AppContext.Provider value={contextWithoutFilter}>
        <Post post={post} />
      </AppContext.Provider>
    )
    .toJSON();
  expect(testPost).toMatchSnapshot();
});
