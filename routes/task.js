import express from 'express';
import { createTast, deleteTask, getTaskById, getTasks, updateTask } from '../controller/task.controller.js';
const router = express.Router();


router.post('/tasks', createTast);
router.get('/tasks', getTasks);
router.get('/tasks/:id', getTaskById);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

export default router;