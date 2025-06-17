const db = require('../config/db');

exports.submitApplication = (req, res) => {
  const { userId, jobId, resume, coverLetter } = req.body;
  if (!userId || !jobId || !resume) {
    return res.status(400).json({ message: 'userId, jobId, and resume are required' });
  }

  const query = 'INSERT INTO applications (user_id, job_id, resume, cover_letter) VALUES (?, ?, ?, ?)';
  db.query(query, [userId, jobId, resume, coverLetter || null], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error submitting application', error: err });
    }
    res.status(201).json({ message: 'Application submitted successfully' });
  });
};

exports.getAllApplications = (req, res) => {
  const query = 'SELECT * FROM applications';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching applications', error: err });
    }
    res.json(results);
  });
};
