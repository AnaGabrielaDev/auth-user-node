import { Router } from 'express';
import { authRoutes } from './authRoutes';
import { postRoutes } from './postRoutes';
import { usersRoutes } from './usersRoutes';

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/auth", authRoutes);
routes.use("/posts", postRoutes);

export { routes }