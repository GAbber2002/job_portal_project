import React, { useState } from "react";
import axios from '../api/axios';

function PostJob() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    company: "",
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/jobs', {
        ...formData,
        posted_by: 1
      });
      setMessage(res.data.message || 'Job posted successfully');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Job Title" onChange={handleChange} required /><br /><br />
        <textarea name="description" placeholder="Job Description" onChange={handleChange} required /><br /><br />
        <input name="company" placeholder="Company Name" onChange={handleChange} required /><br /><br />
        <button type="submit">Post Job</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default PostJob;
