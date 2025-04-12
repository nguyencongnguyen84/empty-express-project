import express from 'express';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/generate-jwt', (req, res) => {
  try {
    const {
      method = 'GET',
      path,
      query,
      accessKey,
      secretKey,
      email
    } = req.body;

    if (!method || !path || !query || !accessKey || !secretKey || !email) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    const qshString = `${method.toUpperCase()}&${path}&${query}`;
    const qsh = crypto.createHash('sha256').update(qshString).digest('hex');

    const payload = {
      sub: email,
      qsh,
      iss: accessKey,
      exp: Math.floor(Date.now() / 1000) + 3600
    };

    const token = jwt.sign(payload, secretKey, { algorithm: 'HS256' });

    res.json({ token, qsh });
  } catch (err) {
    res.status(500).json({ error: 'Failed to generate token', details: err.message });
  }
});

app.get('/', (req, res) => {
  res.send('Zephyr JWT Token Service is running.');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
