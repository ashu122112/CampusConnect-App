// /models/User.js

import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true }, // Role field
    registrationNumber: { type: String }, // Registration number field (optional)
    year: { type: String }, // Year field (optional)
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', UserSchema);