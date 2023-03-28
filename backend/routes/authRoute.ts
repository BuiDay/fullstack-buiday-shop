import express from 'express'
import { createUser, deleteUser, getAllUser, getUserById, loginUser, logoutUser, updateUser } from '../controller/userController';
import { authMiddleware } from '../middlewares/authMiddleware';
const router = express.Router();

router.post('/register',createUser);
router.post('/login',loginUser);
router.get('/logout',logoutUser)

router.get('/get-all-users',getAllUser);

router.get(`/id=:id`,authMiddleware, getUserById);
router.delete(`/?id=:id`,deleteUser);
router.put(`/update-user`,authMiddleware ,updateUser);

export = router