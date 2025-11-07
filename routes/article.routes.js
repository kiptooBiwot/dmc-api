import express from 'express';
import upload from '../middleware/uploadMiddleware.js';
import { uploadFile, getFiles, deleteArticle } from '../controllers/article.controller.js';

const router = express.Router();


router.post('/', upload.single('file'), uploadFile);

router.get('/', getFiles);

router.delete('/:id', deleteArticle)

export default router;
