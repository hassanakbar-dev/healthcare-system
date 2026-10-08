const express = require('express');
const router = express.Router();
const db = require('../config/db');

// @route   POST /api/appointments
// @desc    Book a new appointment
router.post('/', async (req, res) => {
  const { user_id, doctor_id, appointment_date, notes, patientName, phone } = req.body;

  try {
    let finalUserId = user_id;

    // If no user_id is provided (guest booking), create a user first
    if (!finalUserId) {
      // Create a dummy email based on phone or name to satisfy user table if needed
      const dummyEmail = `${patientName.replace(/\s+/g, '').toLowerCase()}${Date.now()}@guest.com`;
      const [newUser] = await db.query(
        'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
        [patientName, dummyEmail, 'guest123', 'patient']
      );
      finalUserId = newUser.insertId;
    }

    // 1. Check if this user is already in the 'patients' table. 
    // If not, add them to 'patients' table first.
    let patientId;
    const [existingPatient] = await db.query('SELECT id FROM patients WHERE user_id = ?', [finalUserId]);

    if (existingPatient.length > 0) {
      patientId = existingPatient[0].id;
    } else {
      // Create new patient profile
      const [newPatient] = await db.query(
        'INSERT INTO patients (user_id, phone) VALUES (?, ?)',
        [finalUserId, phone || '']
      );
      patientId = newPatient.insertId;
    }

    // 2. Book the appointment
    const [result] = await db.query(
      'INSERT INTO appointments (patient_id, doctor_id, appointment_date, notes, status) VALUES (?, ?, ?, ?, ?)',
      [patientId, doctor_id, appointment_date, notes || '', 'Scheduled']
    );

    res.status(201).json({
      message: 'Appointment booked successfully!',
      appointmentId: result.insertId
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error booking appointment' });
  }
});

// @route   GET /api/appointments
// @desc    Get all appointments (Admin)
router.get('/', async (req, res) => {
  try {
    const query = `
      SELECT a.id, a.appointment_date, a.status, a.notes,
             u.name AS patient_name,
             du.name AS doctor_name,
             d.specialization AS doctor_specialty
      FROM appointments a
      JOIN patients p ON a.patient_id = p.id
      JOIN users u ON p.user_id = u.id
      JOIN doctors d ON a.doctor_id = d.id
      JOIN users du ON d.user_id = du.id
      ORDER BY a.appointment_date DESC
    `;
    const [appointments] = await db.query(query);
    res.json(appointments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error fetching appointments' });
  }
});

module.exports = router;
