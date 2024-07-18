import express from 'express';
import { getAllEvents, createEvent } from '../controllers/eventControllers';

const router = express.Router();

router.get('/events', getAllEvents);
router.post('/events', createEvent);

export default router;
