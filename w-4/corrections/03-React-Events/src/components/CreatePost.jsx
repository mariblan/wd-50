import { useState } from 'react';

const CreatePost = () => {
  const [data, setData] = useState({ username: '', blogPost: '' });
  const [username, setUsername] = useState('');
  const [blogPost, setBlogPost] = useState('');

  // submit event

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('data', JSON.stringify(data));
    setData({ username: '', blogPost: '' });
  };

  // change event

  // const handleChange = (e) => {
  //   setUsername(e.target.value);
  // };

  // const handleChange2 = (e) => {
  //   setBlogPost(e.target.value);
  // };

  const handleAllChanges = (e) => {
    // const { value } = e.target;
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  // console.log(username);
  // console.log(blogPost);
  console.log(data);

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleAllChanges}
        value={data.username}
        placeholder='UserName'
        name='username'
      />
      <textarea
        onChange={handleAllChanges}
        value={data.blogPost}
        cols='50'
        rows='10'
        placeholder='Blog post'
        name='blogPost'
      ></textarea>
      <button>Post!</button>
    </form>
  );
};

export default CreatePost;
