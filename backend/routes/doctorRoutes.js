const express = require('express');
const router = express.Router();
const db = require('../config/db');

// @route   GET /api/doctors
// @desc    Get all doctors with their user details
router.get('/', async (req, res) => {
  try {
    // We join the 'doctors' table with 'users' table to get the doctor's name
    const query = `
      SELECT d.id, d.specialization, d.phone, u.name, u.email 
      FROM doctors d
      JOIN users u ON d.user_id = u.id
    `;
    const [doctors] = await db.query(query);
    res.json(doctors);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error fetching doctors' });
  }
});

// @route   POST /api/doctors
// @desc    Add a new doctor (Admin only usually, but open for now to test)
router.post('/', async (req, res) => {
  const { name, email, password, specialization, phone } = req.body;

  try {
    // 1. First, create a user for the doctor in the 'users' table
    const [userResult] = await db.query(
      'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
      [name, email, password, 'doctor']
    );

    const userId = userResult.insertId;

    // 2. Second, add their details to the 'doctors' table
    const [docResult] = await db.query(
      'INSERT INTO doctors (user_id, specialization, phone) VALUES (?, ?, ?)',
      [userId, specialization, phone]
    );

    res.status(201).json({ 
      message: 'Doctor added successfully!',
      doctorId: docResult.insertId 
    });
  } catch (err) {
    console.error(err);
    if (err.code === 'ER_DUP_ENTRY') return res.status(400).json({ error: 'Email already exists' });
    res.status(500).json({ error: 'Server error adding doctor' });
  }
});

module.exports = router;
