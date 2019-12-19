import express from 'express';
import postRouter from './post';
const router = express(); // or express.Router()

router.get('/ping', (req, res) => {
  res.status(200).json({ pong: 'ok' });
});

router.use(postRouter);

export default router;
