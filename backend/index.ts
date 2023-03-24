import express from 'express';
import dbConnect from './config/dbConnect';

// Initialize the express engine
const app: express.Application = express();
 
// Take a port 3000 for running server.
const port: number = 3000;
dbConnect();

// Server setup
app.listen(port, () => {
    console.log(`TypeScript with Express http://localhost:${port}/`);
});


