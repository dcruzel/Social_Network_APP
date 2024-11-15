import { Router } from 'express';
const router = Router();
import { getThoughts, getSingleThought, createThought, updateThought, deleteThought, addThoughtReactions, removeThoughtReaction } from '../../controllers/thoughtController.js';

// /api/thought
router.route('/').get(getThought).post(createThought);

// /api/videos/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleVideo)
  .put(updateVideo)
  .delete(deleteVideo);

// /api/thought/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addThoughtReactions);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeThoughtReaction);

export default router;
