import mysql from 'mysql2';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: '2025_year_plan'
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL Connected');
});

export default db;
