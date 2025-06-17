const db = require('../config/db');

exports.getAllJobs = (req, res) => {
  const query = 'SELECT * FROM jobs';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching jobs', error: err });
    }
    res.json(results);
  });
};

exports.createJob = (req, res) => {
  const { title, description, company, posted_by } = req.body;
  if (!title || !description || !company || !posted_by) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const query = 'INSERT INTO jobs (title, description, company, posted_by) VALUES (?, ?, ?, ?)';
  db.query(query, [title, description, company, posted_by], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error creating job', error: err });
    }
    res.status(201).json({ message: 'Job created successfully', jobId: result.insertId });
  });
};
