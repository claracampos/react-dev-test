import removeMarkdown from 'remove-markdown';

const createPostSummary = (postBody) => removeMarkdown(postBody.slice(0, 100));

export default createPostSummary;
