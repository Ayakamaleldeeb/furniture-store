import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Sample user data (replace this with your database logic)
const users = [
  {
    id: 1,
    email: 'ayakamal@gmail.com',
    password: '123$456Aya', // Replace with a hashed password
  },
];

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    const user = users.find((u) => u.email === email);

    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
      return res.status(200).json({ token });
    }

    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.setHeader('Allow', ['POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}