// Example webhook handler
import express from 'express';
const router = express.Router();

router.post('/webhook', (req, res) => {
  console.log('Webhook received:', req.body);
  res.status(200).send('OK');
});

export default router;