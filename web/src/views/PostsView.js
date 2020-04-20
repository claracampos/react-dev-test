import React, { useContext } from 'react';
import FilteredListHeader from '../components/FilteredListHeader';
import ListOfPosts from '../components/ListOfPosts';
import AppContext from '../context/AppContext';

const PostsView = () => {
  const { filter } = useContext(AppContext);

  return (
    <div className="p-3 container-sm">
      {filter ? (
        <FilteredListHeader />
      ) : (
        <h1 className="display-3">All Posts</h1>
      )}
      <ListOfPosts />
    </div>
  );
};

export default PostsView;
