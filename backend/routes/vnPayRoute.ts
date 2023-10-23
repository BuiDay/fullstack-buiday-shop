import express from 'express'
import { createUrlPay ,getUrlPay} from '../controller/vnPayController';
const router = express.Router();

router.post('/create_payment_url',createUrlPay);
router.get('/vnpay_ipn',getUrlPay);

export = router