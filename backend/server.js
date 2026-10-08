const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic Route to Test Server
app.get('/', (req, res) => {
  res.send('NovaCare Backend is Running!');
});

// Import DB Connection to test it
const db = require('./config/db');

app.get('/api/test-db', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT 1 + 1 AS solution');
    res.json({ message: 'Database connected successfully!', data: rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database connection failed', details: err.message });
  }
});

// Import Routes
const userRoutes = require('./routes/userRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');

// Stats Route for Admin Dashboard
app.get('/api/stats', async (req, res) => {
  try {
    const [[{ totalAppointments }]] = await db.query('SELECT COUNT(*) as totalAppointments FROM appointments');
    const [[{ totalPatients }]] = await db.query('SELECT COUNT(*) as totalPatients FROM patients');
    const [[{ totalDoctors }]] = await db.query('SELECT COUNT(*) as totalDoctors FROM doctors');
    
    res.json({
      appointments: totalAppointments,
      patients: totalPatients,
      doctors: totalDoctors
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
});

// Mount Routes
app.use('/api/users', userRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/appointments', appointmentRoutes);

// Start Server
app.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`);
  
  // Test Database Connection on Startup
  try {
    const connection = await db.getConnection();
    console.log('✅ Database connected successfully!');
    connection.release();
  } catch (err) {
    console.error('❌ Database connection failed:', err.message);
  }
});
