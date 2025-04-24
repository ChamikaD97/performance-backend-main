import express from 'express';
import db from '../db.js';

const router = express.Router();

// Get all achievements
router.get('/', (req, res) => {
  db.query('SELECT * FROM achievements', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Add a new achievement
router.post('/', (req, res) => {
  const data = req.body;
  db.query('INSERT INTO achievements SET ?', data, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ id: result.insertId, ...data });
  });
});

export default router;
