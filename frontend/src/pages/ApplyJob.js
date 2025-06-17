import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios';

const ApplyJob = () => {
  const { jobId } = useParams();
  const [formData, setFormData] = useState({
    user_id: 1,          // Static for now
    job_id: jobId || '',
    resume_url: ''
  });

  const [message, setMessage] = useState('');

  useEffect(() => {
    if (jobId) {
      setFormData(prev => ({ ...prev, job_id: jobId }));
    }
  }, [jobId]);

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
          value={formData.job_id}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="resume_url"
          placeholder="Resume URL (optional)"
          value={formData.resume_url}
          onChange={handleChange}
        />
        <button type="submit">Apply</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default ApplyJob;
