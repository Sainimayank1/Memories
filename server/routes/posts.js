import express from 'express';
import { getPosts } from '../controllers/posts.js';
const routes = express.Router();

routes.get('/',getPosts)


export default routes;