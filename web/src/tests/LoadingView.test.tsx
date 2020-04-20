import React from 'react';
import renderer from 'react-test-renderer';
import LoadingView from '../views/LoadingView';

test('renders ErrorView correctly', () => {
  const testLoadingView = renderer.create(<LoadingView />).toJSON();
  expect(testLoadingView).toMatchSnapshot();
});
