import { Router } from 'express';
import { authRoutes } from './authRoutes';
import { usersRoutes } from './usersRoutes';

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/auth", authRoutes);

export { routes }