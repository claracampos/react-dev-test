import testData from './testData';

export const contextWithFilter = {
  filter: testData[0].author,
  setFilter: console.log('setFilter'),
  fetchedData: testData,
};

export const contextWithoutFilter = {
  filter: false,
  setFilter: console.log('setFilter'),
  fetchedData: testData,
};
