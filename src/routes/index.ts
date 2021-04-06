import { Router } from 'express'; // Importando somente o Router do express pois é a unica dependencia do express que sera usada.
import { categoriesRoutes } from './categories.routes';
import { specificationsRoutes } from './specification.routes';


const router = Router(); //  Foi criada uma variavel do router para receber todas as dependencias que está em Router que foi exportado do express.

router.use("/categories", categoriesRoutes); // router.use está sendo acionado para chamar a rota de categories.
router.use("/specifications", specificationsRoutes);

export { router };