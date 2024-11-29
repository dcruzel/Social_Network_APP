//Import Router from express 
import { Router } from 'express';
//Create router
const router = Router();
//Import all the functions required in the code below from the userController
import { getUsers, getSingleUser, createUser, updateUser, deleteUser } from '../../controllers/userController.js';
// /api/users route added to Router
router.route('/').get(getUsers).post(createUser);
// /api/users/:userId added to Router
router.route('/:userId').get(getSingleUser);
router.route('/:userId').delete(deleteUser);
router.route('/:userId').put(updateUser);
// export the routes above 
export default router;
