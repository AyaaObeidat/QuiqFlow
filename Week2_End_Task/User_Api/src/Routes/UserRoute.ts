import { Router } from 'express';
import {
  getAllUsers,
  getPendingUsers,
  getApprovedUsers,
  updateUserRequestStatus,
  addUser,
  UpdateUser,
  getUserById,
  login,
  deleteUser,
} from '../Controllers/UserController';

const router = Router();

router.get('/all', getAllUsers);
router.get('/pending', getPendingUsers);
router.get('/approved', getApprovedUsers);

router.post('/id', getUserById);
router.post('/add', addUser);
router.post('/login', login);
router.post('/updateStatus', updateUserRequestStatus);

router.patch('/update', UpdateUser);

router.delete('/delete', deleteUser);

export default router;
