import express from 'express';
const router = express.Router();
import { authMiddleware,isAdmin} from "../middlewares/authMiddleware";
import { uploadPhoto,blogImageResize} from "../middlewares/uploadImages";
import { createBlog, deleteBlog, dislikeBlog, getAllBlog, getBlog, likeBlog, updateBlog, uploadImage } from '../controller/blogController';

router.post('/',authMiddleware,isAdmin,createBlog);
router.put('/:id',authMiddleware,isAdmin,updateBlog);
router.put(
    '/upload/:id',authMiddleware,isAdmin,
    uploadPhoto.array("images",2),
    blogImageResize,
    uploadImage
);
router.put('/likes',authMiddleware,likeBlog);
router.put('/dislikes',authMiddleware,dislikeBlog);
router.get('/:id',getBlog);
router.get('/',getAllBlog);
router.delete("/:id",authMiddleware,isAdmin,deleteBlog);
module.exports= router