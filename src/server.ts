import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { router } from './routes';
import swaggerFile from './swagger.json';

// 
const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router); // router é resaponsavel por controlar as roatas da aplicação.

app.listen(3333, ()=>{
    console.log("Back-and Started!")
});