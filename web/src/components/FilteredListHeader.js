import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const FilteredListHeader = () => {
  const { filter, setFilter } = useContext(AppContext);

  return (
    <div>
      <h1 className="display-4">Posts by {filter.name}</h1>
      <p
        onClick={() => {
          setFilter(false);
        }}
        className="btn btn-secondary btn-sm mt-2"
      >
        View posts by all authors
      </p>
    </div>
  );
};

export default FilteredListHeader;
