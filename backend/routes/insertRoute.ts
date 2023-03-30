import express from 'express'
import { insertCategories, insertProduct} from '../controller/insertController';
const router = express.Router();

router.post('/product',insertProduct);
router.post('/category',insertCategories);

export = router