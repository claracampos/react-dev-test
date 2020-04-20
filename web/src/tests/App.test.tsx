/* eslint-env jest */

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { App } from '../App';
import testData from './fixtures/testData';
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

test('renders filteredListHeader correctly', () => {
  const testHeader = renderer
    .create(
      <AppContext.Provider
        value={{ filter: false, setFilter: console.log('setFilter') }}
      >
        <FilteredListHeader />
      </AppContext.Provider>
    )
    .toJSON();
  expect(testHeader).toMatchSnapshot();
});

test('renders filtered PostsView correctly', () => {
  const testPostsViewWithFilter = renderer
    .create(
      <AppContext.Provider
        value={{
          filter: testData[0].author,
          setFilter: console.log('setFilter'),
          fetchedData: testData,
        }}
      >
        <PostsView />
      </AppContext.Provider>
    )
    .toJSON();
  expect(testPostsViewWithFilter).toMatchSnapshot();
});

test('renders PostsView without filter correctly', () => {
  const testPostsViewWithFilter = renderer
    .create(
      <AppContext.Provider
        value={{
          filter: false,
          setFilter: console.log('setFilter'),
          fetchedData: testData,
        }}
      >
        <PostsView />
      </AppContext.Provider>
    )
    .toJSON();
  expect(testPostsViewWithFilter).toMatchSnapshot();
});
