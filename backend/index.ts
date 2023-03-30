import express from 'express';
import dbConnect from './config/dbConnect';
import { errorHandler } from './middlewares/errorHandler';
import authRouter from './routes/authRoute';
import productRouter from './routes/productRoute';
import insertRouter from './routes/insertRoute';
import insertCategory from './routes/categoryRoute';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cookie from 'cookie-parser'
import cors from 'cors'
// Initialize the express engine
const app: express.Application = express();

// Take a port 3000 for running server.

const port: number = 8000;
dotenv.config();
dbConnect();
app.use(cors())
app.use(cookie())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/api/user',authRouter);
app.use('/api/product',productRouter);
app.use('/api/insert',insertRouter);
app.use('/api/category',insertCategory);
app.use(errorHandler);

// Server setup
app.listen(port, () => {
    console.log(`TypeScript with Express http://localhost:${port}/`);
});


