import React from 'react';
import renderer from 'react-test-renderer';
import { contextWithFilter } from './fixtures/testContext';
import AppContext from '../context/AppContext';
import FilteredListHeader from '../components/FilteredListHeader';

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
