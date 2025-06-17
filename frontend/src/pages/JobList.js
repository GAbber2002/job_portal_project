import React, { useState, useEffect } from "react";
import JobCard from "../components/JobCard";

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Dummy job data
    const dummyJobs = [
      {
        id: 1,
        title: "Frontend Developer",
        company: "Tech Solutions",
        description: "Build user interfaces using React.",
      },
      {
        id: 2,
        title: "Backend Developer",
        company: "CodeCraft",
        description: "Develop REST APIs using Node.js.",
      },
      {
        id: 3,
        title: "Full Stack Developer",
        company: "DevCorp",
        description: "Handle frontend and backend integration.",
      },
    ];
    setJobs(dummyJobs);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Available Jobs</h2>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default JobList;
