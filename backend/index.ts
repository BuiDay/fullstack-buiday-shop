import express from 'express';
import dbConnect from './config/dbConnect';
import { errorHandler } from './middlewares/errorHandler';
import authRouter from './routes/authRoute';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
// Initialize the express engine
const app: express.Application = express();

// Take a port 3000 for running server.

const port: number = 3000;
dotenv.config();
dbConnect();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/api/user',authRouter);
app.use(errorHandler);

// Server setup
app.listen(port, () => {
    console.log(`TypeScript with Express http://localhost:${port}/`);
});


