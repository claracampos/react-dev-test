const filterByAuthor = (list, authorId) =>
  list.filter((post) => post.author.id === authorId);

export default filterByAuthor;
