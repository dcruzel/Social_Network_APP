//Import Router from express 
import { Router } from 'express';
//Create router
const router = Router();
//Import thoughtRoutes and userRoutes
import thoughtRoutes from './thoughtRoutes.js';
import userRoutes from './userRoutes.js';
//Add thoughtRoutes and userRoutes imported to express router
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);
//Exporter the routes when index api is called
export default router;
