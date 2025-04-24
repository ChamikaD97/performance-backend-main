import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import bestTargetRoutes from './routes/bestTarget.js';
import belowBestTargetRoutes from './routes/belowBestTarget.js';
import poorTargetRoutes from './routes/poorTarget.js';
import monthlyTargetRoutes from './routes/monthlyTarget.js';
import achievementRoutes from './routes/achievement.js';
import officerRoutes from './routes/officer.js';



const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/best-target', bestTargetRoutes);
app.use('/api/quality-target', belowBestTargetRoutes);
app.use('/api/poor-target', poorTargetRoutes);
app.use('/api/monthly-target', monthlyTargetRoutes);
app.use('/api/achievements', achievementRoutes);
app.use('/api/officers', officerRoutes);

// Fallback for unmatched routes
app.use('*', (req, res) => {
  res.status(404).json({ message: 'API endpoint not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
