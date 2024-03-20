/* note: express: This imports the entire Express.js module.
         { Express, Request, Response, Application, Router }: This part uses destructuring to import specific named exports from the Express.js module.
*/

import express, { Express, Request, Response, Application, Router } from "express";

//const generateToken = require('./jwt/encode')
import generateToken from './jwt/encode'

// Initialize dotenv before use
require('dotenv').config()
import * as dotenv from 'dotenv';
import verifyToken from "./jwt/decode";
//For env File 
dotenv.config()

const app = express()
const port = 3000
app.listen(port, () => {
    console.log("http://localhost:3000/")
})


app.get('/register', (req: Request, res: Response) => {

    const token = generateToken({ email: "nipuni20ch@getMaxListeners.com", password: "12345" });
    res.send(token)
})


app.get('/verify', (req: Request, res: Response) => {

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.sendStatus(401);
    }

    const result = verifyToken(token);

    res.send(result)
})