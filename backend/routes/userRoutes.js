const express = require('express');
const router = express.Router();
const db = require('../config/db');

// @route   GET /api/users
// @desc    Get all users
router.get('/', async (req, res) => {
  try {
    const [users] = await db.query('SELECT id, name, email, role, created_at FROM users');
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error fetching users' });
  }
});

// @route   POST /api/users
// @desc    Add a new user
router.post('/', async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    // Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Please provide name, email, and password' });
    }

    // Insert into database
    // Note: In a real app, ALWAYS hash the password before saving (e.g., using bcrypt)
    const [result] = await db.query(
      'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
      [name, email, password, role || 'patient']
    );

    res.status(201).json({ 
      message: 'User created successfully!',
      userId: result.insertId 
    });
  } catch (err) {
    console.error(err);
    // Handle duplicate email error
    if (err.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ error: 'Email already exists' });
    }
    res.status(500).json({ error: 'Server error creating user' });
  }
});

// @route   POST /api/users/login
// @desc    Authenticate user & get token (Login)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const [users] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    
    if (users.length === 0) {
      return res.status(400).json({ error: 'Invalid Email or Password' });
    }

    const user = users[0];

    // In a real app, use bcrypt.compare to check hashed password
    // For now, we are checking plain text password as per registration logic
    if (user.password !== password) {
      return res.status(400).json({ error: 'Invalid Email or Password' });
    }

    // Success
    res.json({
      message: 'Login successful!',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error during login' });
  }
});

module.exports = router;
