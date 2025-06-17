

const db = require("../config/db");

// POST /register
exports.registerUser = (req, res) => {
  const { name, email, password, role } = req.body;
  if (!name || !email || !password || !role) {
    return res.status(400).json({ message: "All fields required" });
  }

  const query = "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)";
  db.query(query, [name, email, password, role], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error registering user", error: err });
    }
    res.status(201).json({ message: "User registered successfully" });
  });
};

// POST /login
exports.loginUser = (req, res) => {
  const { email, password } = req.body;
  const query = "SELECT * FROM users WHERE email = ? AND password = ?";
  
  db.query(query, [email, password], (err, results) => {
    if (err) return res.status(500).json({ message: "Login failed", error: err });

    if (results.length === 0) return res.status(401).json({ message: "Invalid credentials" });

    res.status(200).json({ message: "Login successful", user: results[0] });
  });
};

// POST /login
exports.loginUser = (req, res) => {
  const { email, password } = req.body;
  const query = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(query, [email, password], (err, results) => {
    if (err) return res.status(500).json({ message: "Login failed", error: err });
    if (results.length === 0) return res.status(401).json({ message: "Invalid credentials" });

    res.status(200).json({ message: "Login successful", user: results[0] });
  });
};
