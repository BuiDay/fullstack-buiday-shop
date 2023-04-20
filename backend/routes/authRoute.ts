import express from 'express'
import { createUser, deleteUser, forgotPassword, getAllUser, getUserById, loginUser, logoutUser, resetPassword, updateUser } from '../controller/userController';
import { authMiddleware } from '../middlewares/authMiddleware';
const router = express.Router();

router.post('/register',createUser);
router.post('/login',loginUser);
router.get('/logout',logoutUser)

router.get('/get-all-users',getAllUser);

router.get(`/`,authMiddleware, getUserById);
router.delete(`/?id=:id`,deleteUser);
router.put(`/update-user`,authMiddleware ,updateUser);

router.post("/forgot-password",forgotPassword);
router.post("/reset-password/:token",resetPassword);

export = router