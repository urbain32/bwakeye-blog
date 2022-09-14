import React from 'react';
import { useParams,useHistory } from 'react-router-dom';
import Loader from './Loader';
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    loading,
    error,
  } = useFetch('https://bwakeye-blog.herokuapp.com/api/blogs/' + id);
  const history = useHistory();
  const handleDelete = () => {
    fetch('https://bwakeye-blog.herokuapp.com/api/blogs/' + blog.id, {
      method: 'DELETE',
    }).then(() => {
      history.push('/');
    });
  };
  return (
    <div className='blog-details'>
      {loading && <Loader />}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
