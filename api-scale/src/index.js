// cors serve para liberar ou bloquear requests vindo de fora 
 import express, { application } from 'express';
import cors from 'cors';
import routes from './routes/index.routes'




const server = express();
server.use(express.json());
server.use(cors());
server.use('/',routes)

server.listen(3001,()=> console.log('api is running'));


      