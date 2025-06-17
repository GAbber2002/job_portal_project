import React from 'react';
import { useNavigate } from 'react-router-dom';

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate(`/apply/${job.id}`);
  };

  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p>{job.description}</p>
      <button onClick={handleApplyClick}>Apply</button>
    </div>
  );
};

export default JobCard;
