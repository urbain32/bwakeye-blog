import React from 'react';
import useFetch from './useFetch';
import Loader from './Loader';
import BlogList from './BlogList';
const Home = () => {
  const {
    data: blogs,
    error,
    loading,
  } = useFetch('https://bwakeye-blog.herokuapp.com/api/blogs');
  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {loading && <Loader />}
      {blogs && <BlogList blogs={blogs} title= 'All Blogs'/>}
    </div>
  );
};

export default Home;
