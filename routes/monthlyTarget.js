import express from 'express';
import db from '../db.js';

const router = express.Router();

// Get all
router.get('/', (req, res) => {
  db.query('SELECT * FROM monthly_target', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Create new
router.post('/', (req, res) => {
  const data = req.body;
  db.query('INSERT INTO monthly_target SET ?', data, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ id: result.insertId, ...data });
  });
});

// Update
router.put('/:id', (req, res) => {
  db.query('UPDATE monthly_target SET ? WHERE id = ?', [req.body, req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.send('Updated');
  });
});

// Delete
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM monthly_target WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.send('Deleted');
  });
});

export default router;
