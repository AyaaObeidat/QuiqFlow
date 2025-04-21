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
} from '@/Controllers/UserController';

const router = Router();

router.get('/allUsers', getAllUsers);
router.get('/pendingUsers', getPendingUsers);
router.get('/approvedUsers', getApprovedUsers);

router.post('/id', getUserById);
router.post('/addUser', addUser);
router.post('/login', login);
router.post('/updateReqStatus', updateUserRequestStatus);

router.patch('/updateUser', UpdateUser);

router.delete('/deleteUser', deleteUser);

export default router;
