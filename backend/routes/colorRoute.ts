import express from 'express';
const router = express.Router();
import {authMiddleware,isAdmin} from '../middlewares/authMiddleware'
import { getAllColors } from '../controller/colorController';

router.get('/',getAllColors);

export= router