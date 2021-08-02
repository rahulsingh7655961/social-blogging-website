import express from 'express';
import { createPost, getAllPosts,getPost, updatePost,deletePost } from '../controller/postController.js'

const router = express.Router();

router.post('/create', createPost);
router.post('/update/:id',updatePost)
router.delete('/delete/:id',deletePost);

router.get('/post/:id',getPost);
router.get('/posts',getAllPosts);


export default router;