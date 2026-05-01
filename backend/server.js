const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require("./src/config/db");

const authRoutes = require('./src/routes/authRoutes');
const rideRoutes = require('./src/routes/rideRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  "https://shuttle-elite.vercel.app",
  "https://shuttle-elite-529qxi5sh-harshilpatels-projects-e1a200a3.vercel.app",
  "https://shuttleelite.vercel.app",
  "http://localhost:5173",
  "http://localhost:3000"
];

app.use(cors({
  origin: true, // Allow all origins
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/rides', rideRoutes);

app.get('/', (req, res) => {
  res.json({ status: 'ShuttleElite Backend Running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});