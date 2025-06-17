const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');

// Changed route path from '/submit' to '/apply' to match curl command
router.post('/apply', applicationController.submitApplication);

// New GET route to fetch all applications
router.get('/all', applicationController.getAllApplications);

module.exports = router;
