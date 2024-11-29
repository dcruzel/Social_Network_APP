//Import Router from express 
import { Router } from 'express';

//Create router
const router = Router();

//Import all the functions required in the code below from the userController
import { getUsers, getSingleUser, createUser, updateUser, deleteUser, addFriend, deleteFriend } from '../../controllers/userController.js';

// /api/users route added to Router
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId added to Router
router.route('/:userId').get(getSingleUser);
router.route('/:userId').delete(deleteUser);
router.route('/:userId').put(updateUser);
router.route('/:userId/friend').put(addFriend);
router.route('/:userId/friend/:userID').put(deleteFriend);

// export the routes above 
export default router;
