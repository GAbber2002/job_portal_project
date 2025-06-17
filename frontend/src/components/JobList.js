import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('/api/jobs')
      .then(res => setJobs(res.data))
      .catch(err => console.error('Error fetching jobs:', err));
  }, []);

  return (
    <div>
      <h2>Available Jobs</h2>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job.title} — {job.company}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
