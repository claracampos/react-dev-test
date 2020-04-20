const sortByDate = (list) =>
  list
    .slice()
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));

export default sortByDate;
