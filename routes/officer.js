import express from 'express';
import db from '../db.js';

const router = express.Router();

// Get all officers
router.get('/', (req, res) => {
  db.query('SELECT * FROM officers', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Add new officer
router.post('/', (req, res) => {
  const { name, position, email, phone } = req.body;
  db.query(
    'INSERT INTO officers (name, position, email, phone) VALUES (?, ?, ?, ?)',
    [name, position, email, phone],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ id: result.insertId, name, position, email, phone });
    }
  );
});

// Update officer
router.put('/:id', (req, res) => {
  const data = req.body;
  db.query('UPDATE officers SET ? WHERE id = ?', [data, req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.send('Officer updated');
  });
});

// Delete officer
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM officers WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.send('Officer deleted');
  });
});

export default router;
