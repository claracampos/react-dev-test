import React from 'react';
import renderer from 'react-test-renderer';
import {
  contextWithFilter,
  contextWithoutFilter,
} from './fixtures/testContext';
import AppContext from '../context/AppContext';
import PostsView from '../views/PostsView';

test('renders filtered PostsView correctly', () => {
  const testPostsViewWithFilter = renderer
    .create(
      <AppContext.Provider value={contextWithFilter}>
        <PostsView />
      </AppContext.Provider>
    )
    .toJSON();
  expect(testPostsViewWithFilter).toMatchSnapshot();
});

test('renders PostsView without filter correctly', () => {
  const testPostsViewWithFilter = renderer
    .create(
      <AppContext.Provider value={contextWithoutFilter}>
        <PostsView />
      </AppContext.Provider>
    )
    .toJSON();
  expect(testPostsViewWithFilter).toMatchSnapshot();
});
