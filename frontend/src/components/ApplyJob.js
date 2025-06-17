import React, { useState } from 'react';
import axios from '../api/axios';

const ApplyJob = () => {
  const [formData, setFormData] = useState({
    user_id: 1,          // Static for now
    job_id: '',
    resume_url: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/applications', formData);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error applying for job');
    }
  };

  return (
    <div>
      <h2>Apply for a Job</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="job_id"
          placeholder="Job ID"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="resume_url"
          placeholder="Resume URL (optional)"
          onChange={handleChange}
        />
        <button type="submit">Apply</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default ApplyJob;
