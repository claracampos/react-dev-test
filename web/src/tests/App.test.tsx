/* eslint-env jest */

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { App } from '../App';
import testData from './fixtures/testData';
import {
  contextWithFilter,
  contextWithoutFilter,
} from './fixtures/testContext';
import Post from '../components/Post';
import AppContext from '../context/AppContext';
import ListOfPosts from '../components/ListOfPosts';
import FilteredListHeader from '../components/FilteredListHeader';
import PostsView from '../views/PostsView';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

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

test('renders unfiltered ListOfPosts correctly', () => {
  const testList = renderer
    .create(
      <AppContext.Provider value={contextWithoutFilter}>
        <ListOfPosts />
      </AppContext.Provider>
    )
    .toJSON();
  expect(testList).toMatchSnapshot();
});

test('renders filtered ListOfPosts correctly', () => {
  const testList = renderer
    .create(
      <AppContext.Provider value={contextWithFilter}>
        <ListOfPosts />
      </AppContext.Provider>
    )
    .toJSON();
  expect(testList).toMatchSnapshot();
});

test('renders filteredListHeader correctly', () => {
  const testHeader = renderer
    .create(
      <AppContext.Provider value={contextWithFilter}>
        <FilteredListHeader />
      </AppContext.Provider>
    )
    .toJSON();
  expect(testHeader).toMatchSnapshot();
});

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
