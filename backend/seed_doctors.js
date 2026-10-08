const mysql = require('mysql2/promise');
require('dotenv').config();

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'healthcare_db'
};

const doctorsToAdd = [
  { name: 'Dr. Sarah Jenkins', email: 'sarah@novacare.com', spec: 'Cardiology' },
  { name: 'Dr. Emily Chen', email: 'emily@novacare.com', spec: 'Neurology' },
  { name: 'Dr. Michael Smith', email: 'michael@novacare.com', spec: 'Orthopedics' },
  { name: 'Dr. Aisha Khan', email: 'aisha@novacare.com', spec: 'Pediatrics' },
  { name: 'Dr. John Davis', email: 'john.d@novacare.com', spec: 'Primary Care' },
  { name: 'Dr. Robert Lee', email: 'robert@novacare.com', spec: 'Ophthalmology' }
];

async function seed() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('Connected to DB');

    for (const doc of doctorsToAdd) {
      // Check if user exists
      const [existingUser] = await connection.query('SELECT id FROM users WHERE email = ?', [doc.email]);
      let userId;
      
      if (existingUser.length > 0) {
        userId = existingUser[0].id;
      } else {
        const [userRes] = await connection.query(
          'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
          [doc.name, doc.email, 'password123', 'doctor']
        );
        userId = userRes.insertId;
      }

      // Check if doctor exists
      const [existingDoc] = await connection.query('SELECT id FROM doctors WHERE user_id = ?', [userId]);
      if (existingDoc.length === 0) {
        await connection.query(
          'INSERT INTO doctors (user_id, specialization) VALUES (?, ?)',
          [userId, doc.spec]
        );
        console.log(`Added ${doc.name} - ${doc.spec}`);
      } else {
        console.log(`Doctor ${doc.name} already exists.`);
      }
    }

    await connection.end();
    console.log('Seeding complete.');
  } catch (err) {
    console.error('Error:', err);
  }
}

seed();
