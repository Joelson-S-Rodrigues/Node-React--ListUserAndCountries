import { Router } from "express"; 
import Controller from '../controller/index.controller'




const routes = new Router();



routes.get('/healthCheck', Controller.test )
routes.get('/getUser', Controller.getUser)
routes.get('/getCountries', Controller.getCountries)





module.exports = routes;
