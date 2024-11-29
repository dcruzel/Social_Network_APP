//Import express Router
import { Router } from 'express';

//Create router
const router = Router();

//Import all the functions required in the code below from the thoughtController

import { getThoughts, getSingleThought, createThought, updateThought, deleteThought, addThoughtReaction, removeThoughtReaction} from '../../controllers/thoughtController.js';

// /api/thoughts route added to express router
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId added to express router
router.route('/:thoughtId').get(getSingleThought)
router.route('/:thoughtId').put(updateThought)
router.route('/:thoughtId').delete(deleteThought);

// /api/thoughts/:thoughtId/reactions added to express router
router.route('/:thoughtId/reactions').post(addThoughtReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId added to express router
router.route('/:thoughtId/reactions/:reactionId').delete(removeThoughtReaction);

// export the routes above 
export default router;
