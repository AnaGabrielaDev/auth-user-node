import { Router } from 'express';
import { PostController } from '../controllers/PostController';
import { verifyAuth } from '../middlewares/verifyAuth';

const postController = new PostController();
const postRoutes = Router();

postRoutes.post("/", verifyAuth, postController.create);
postRoutes.get("/", postController.index);

export { postRoutes }