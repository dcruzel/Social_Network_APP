//Import Router from express 
import { Router } from 'express';
//Create router
const router = Router();
import apiRoutes from './api/index.js';
//Use /api in routes
router.use('/api', apiRoutes);
//If no routes available, send wrong routes
router.use((_req, res) => {
    return res.send('Wrong route!');
});
// export the routes above 
export default router;
