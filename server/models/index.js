import mongoose from "mongoose";
import cors from "cors";
import nodemailer from 'nodemailer';

import dotenv from 'dotenv';
dotenv.config();

const db = {};

db.mongoose = mongoose;


db.cors=cors;
db.nodemailer=nodemailer


db.url = process.env.DB_CONNECTION_STRING;
db.PORT = process.env.PORT || 4000; 
db.gmailUser = process.env.GMAIL_USER;
db.gmailPass = process.env.GMAIL_PASS;
db.secretKey= process.env.JWT_SECRET

export default db;