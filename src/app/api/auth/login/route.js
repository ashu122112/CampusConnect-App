// /pages/api/auth/login.js
"use client"
import connect from '@/utils/dbConfig';
import User from '@/models/User';
import bcrypt from 'bcrypt';

connect();
export default async function handler(req, res) {

    if (req.method === 'POST') {
        const { email, password } = req.body;

        try {
            // Find the user by email
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: "Invalid credentials" });
            }

            // Check password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ message: "Invalid credentials" });
            }

            // Successful login - you can send back user data or a token here
            res.status(200).json({ message: "Login successful", userId: user._id, role: user.role });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error" });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}