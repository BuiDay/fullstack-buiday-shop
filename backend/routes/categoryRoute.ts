import express from 'express';
import { createCategory, deleteCategory, getAllCategory, getaCategory, updateCategory } from '../controller/categoryController';
const router = express.Router();
import {authMiddleware,isAdmin} from '../middlewares/authMiddleware'


router.post('/',authMiddleware,isAdmin,createCategory);
router.put('/:id',authMiddleware,isAdmin,updateCategory);
router.delete('/:id',authMiddleware,isAdmin,deleteCategory);
router.get('/:id',getaCategory);
router.get('/',getAllCategory);

export= router