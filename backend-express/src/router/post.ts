import express from 'express';
import { getPosts } from '../controller/post';

const router = express();

router.get('/posts', getPosts);

export default router;
