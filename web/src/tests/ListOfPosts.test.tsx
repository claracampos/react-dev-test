import React from 'react';
import renderer from 'react-test-renderer';
import {
  contextWithFilter,
  contextWithoutFilter,
} from './fixtures/testContext';
import AppContext from '../context/AppContext';
import ListOfPosts from '../components/ListOfPosts';

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
