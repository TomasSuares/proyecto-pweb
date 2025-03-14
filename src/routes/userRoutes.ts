import { Router } from 'express';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser, findUserByEmail } from '../controllers/userController';

const router = Router();

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.get('/users/email/:email', findUserByEmail); // Endpoint adicional para buscar por email

export default router;
