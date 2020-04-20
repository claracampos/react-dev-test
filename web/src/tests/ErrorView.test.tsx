import React from 'react';
import renderer from 'react-test-renderer';
import ErrorView from '../views/ErrorView';

test('renders ErrorView correctly', () => {
  const testErrorView = renderer.create(<ErrorView error={'error'} />).toJSON();
  expect(testErrorView).toMatchSnapshot();
});
