import express from 'express';
import db from '../db.js';

const router = express.Router();

// Get all entries in the 'monthly_poor_target' table
router.get('/', (req, res) => {
  db.query('SELECT * FROM monthly_poor_target', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Add a new entry in the 'monthly_poor_target' table
router.post('/', (req, res) => {
  console.log('*****');
  
  const data = req.body;
  db.query('INSERT INTO monthly_poor_target SET ?', data, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ id: result.insertId, ...data });
  });
});

// Update an entry in the 'monthly_poor_target' table
router.put('/:id', (req, res) => {
  const data = req.body;
  db.query('UPDATE monthly_poor_target SET ? WHERE id = ?', [data, req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.send('Updated');
  });
});

// Delete an entry from the 'monthly_poor_target' table
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM monthly_poor_target WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.send('Deleted');
  });
});

export default router;
