import express from 'express';
const router = express.Router();
import { authMiddleware,isAdmin}  from "../middlewares/authMiddleware";
import { addToWishlist, createProduct, deleteProduct, getAllProducts, getProduct, getSearchProducts, rating, updateProduct } from '../controller/productController';

router.post('/',authMiddleware,isAdmin,createProduct);
router.put("/id=:id",authMiddleware,updateProduct)
router.put("/wishlist",authMiddleware,addToWishlist)
router.put("/rating",authMiddleware,rating)
router.get('/get_product',getProduct);
router.delete('/id=:id',authMiddleware,isAdmin,deleteProduct);
router.get('/',getAllProducts);
router.get('/search-product',getSearchProducts);

export= router
