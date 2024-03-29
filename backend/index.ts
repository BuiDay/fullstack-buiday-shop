import express from 'express';
import dbConnect from './config/dbConnect';
import { errorHandler } from './middlewares/errorHandler';
import authRouter from './routes/authRoute';
import productRouter from './routes/productRoute';
import insertRouter from './routes/insertRoute';
import categoryRouter from './routes/categoryRoute';
import colorRouter from './routes/colorRoute';
import vnpayRouter from './routes/vnPayRoute';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cookie from 'cookie-parser'
import cors from 'cors'
// Initialize the express engine
const app: express.Application = express();

// Take a port 3000 for running server.

const port: number = 8002;
dotenv.config();
dbConnect();
app.use(cors())
app.use(cookie())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/api/user',authRouter);
app.use('/api/product',productRouter);
app.use('/api/insert',insertRouter);
app.use('/api/category',categoryRouter);
app.use('/api/color',colorRouter);
app.use('/api/vnpay',vnpayRouter);
app.use(errorHandler);

// Server setup
app.listen(port, () => {
    console.log(`TypeScript with Express${port}/`);
});


