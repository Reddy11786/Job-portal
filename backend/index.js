// index.js
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from "cors";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';

dotenv.config();

// Express application instance
const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
};
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

// Connect to the database before starting the server
connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
