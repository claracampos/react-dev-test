import React, { useContext } from 'react';
import FilteredListHeader from '../components/FilteredListHeader';
import ListOfPosts from '../components/ListOfPosts';
import AppContext from '../context/AppContext';

const PostsView = () => {
  const { filter } = useContext(AppContext);

  return (
    <div>
      {filter ? <FilteredListHeader /> : <h1>Posts</h1>}
      <ListOfPosts />
    </div>
  );
};

export default PostsView;
