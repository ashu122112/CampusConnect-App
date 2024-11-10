// /src/app/api/auth/signup/route.js
""
import connect from '@/utils/dbConfig'; // Adjust the path as necessary
import User from '@/models/User'; // Adjust the path as necessary
import bcrypt from 'bcrypt';

// Connect to the database
connect();
const handler = async (req, res) => {

    if (req.method === 'POST') {
        const { username, email, password, role, registrationNumber, year } = req.body;

        try {
            // Check if user already exists
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: "User already exists" });
            }

            // Hash password before saving
            const hashedPassword = await bcrypt.hash(password, 12);

            // Create new user object with required fields
            const newUser = new User({ 
                username,
                email,
                password: hashedPassword,
                role,
                registrationNumber: role === 'Student' ? registrationNumber : undefined,
                year: role === 'Student' ? year : undefined 
            });

            await newUser.save();

            res.status(201).json({ message: "User created successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error" });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};

// Export named handler for POST requests
export { handler as POST };