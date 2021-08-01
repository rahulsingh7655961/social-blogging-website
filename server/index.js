import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import Router from './routes/route.js';
import Connection from './database/db.js';

const  app = express();


app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Router);

const port = 8000;
app.listen(port,()=>console.log("server is running on port 8000")); 
 
Connection();