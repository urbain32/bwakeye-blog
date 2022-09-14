import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Loader from './Loader';
const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Irakoze');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setLoading(true);
    fetch('https://bwakeye-blog.herokuapp.com/api/blogs', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log('Muhejeje gushirako blog shansha');
      history.push('/');
      setLoading(false);
    });
  };
  return (
    <div className='create'>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Blog Body:</label>
        <textarea
          id=''
          cols='30'
          rows='5'
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <label>Blog Author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        >
          <option value='Irakoze'>Irakoze</option>
          <option value='Nduwayo'>Nduwayo</option>
          <option value='Niyibigira'>Niyibigira</option>
        </select>

        {!loading && <button>Add Blog</button>}
        {loading && <Loader />}
      </form>
    </div>
  );
};

export default Create;
