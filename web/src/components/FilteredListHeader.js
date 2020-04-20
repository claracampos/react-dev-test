import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const FilteredListHeader = () => {
  const { filter, setFilter } = useContext(AppContext);

  return (
    <div>
      <h1>Posts by {filter.name}</h1>
      <p
        onClick={() => {
          setFilter(false);
        }}
      >
        View posts by all authors
      </p>
    </div>
  );
};

export default FilteredListHeader;
